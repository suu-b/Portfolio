const express = require('express')
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const nodeScheduler = require('node-schedule')
require('dotenv').config()

const username = process.env.GITHUB_USERNAME
const token = process.env.GITHUB_TOKEN
const filePath = path.join(__dirname, 'data', 'data.json')
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({}))
}

const fetchRepos = async () => {
    try {
        let page = 1
        let repos = []
        let hasMoreRepos = true
        while (hasMoreRepos) {
            const response = await axios.get(`https://api.github.com/users/${username}/repos`,
                {
                    headers: { 'Authorization': `token ${token}` },
                    params: { per_page: 100, page }
                })
            repos = repos.concat(response.data)
            hasMoreRepos = response.data.length === 100
            page++
        }
        return repos
    }
    catch (e) {
        console.log("ERROR: Fetching repositories:" + e)
        return []
    }
}

const fetchOrgs = async () => {
    try {
        const response = await axios.get('https://api.github.com/user/orgs', { headers: { 'Authorization': `token ${token}` } })
        const orgsList = response.data.map(rp => rp.login)
        return orgsList
    }
    catch (e) {
        console.log("ERROR: Fetching orgs:" + e)
        return []
    }
}

const fetchOrgsPRDetails = async () => {
    try {
        const orgs = (await fetchOrgs())[0]
        const communityProjects = process.env.COMMUNITY_PROJECTS.split(',')
        let totalPulls = 0
        for (let project of communityProjects) {
            const repoPulls = await axios.get(`https://api.github.com/repos/${orgs}/${project}/pulls?state=all`, { headers: { 'Authorization': `token ${token}` } })
            totalPulls += repoPulls.data.length
        }
        return totalPulls
    }
    catch (e) {
        console.log("ERROR: counting orgs prs:" + e)
        return 0
    }
}

const fetchPersonalPRDetails = async () => {
    try {
        const repos = await fetchRepos()
        let totalPersonalPRs = 0
        for (let repo of repos) {
            const response = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/pulls?state=all`, { headers: { 'Authorization': `token ${token}` } })
            totalPersonalPRs += response.data.length
        }
        return totalPersonalPRs
    } catch (error) {
        console.log("ERROR: counting personal repos prs:" + e)
        return 0
    }
}

const fetchAndCachePRDetails = async () => {
    const personalPRs = await fetchPersonalPRDetails()
    const orgPrs = await fetchOrgsPRDetails()
    await cacheData("personalPRs", personalPRs)
    await cacheData("orgsPRs", orgPrs)
    await cacheData("totalPRs", personalPRs + orgPrs)
}

const fetchAndCacheLanguages = async () => {
    try {
        const repos = await fetchRepos()
        const languages = {}
        for (let repo of repos) {
            const languagesResponse = await axios.get(repo.languages_url, { headers: { 'Authorization': `token ${token}` } })
            const langs = languagesResponse.data
            for (let [language, amt] of Object.entries(langs)) {
                languages[language] = (languages[language] || 0) + amt
            }
        }
        await cacheData("languages", languages)

    } catch (error) {
        console.log(error)
    }
}

const cacheData = async (title, data) => {
    try {
        let existingData = {}
        if (fs.existsSync(filePath)) {
            existingData = JSON.parse(fs.readFileSync(filePath))
        }
        existingData[title] = data
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2))
        console.log("Success: Caching data under title: " + title)
    }
    catch (e) {
        console.log("ERROR: Caching data under title: " + title)
        console.log(title, data)
        console.log(e)
    }
}

const app = express()
app.use(cors())

app.get('/api', async (req, resp) => {
    try {
        fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading data file:', err);
                resp.status(500).send('Internal Server Error');
            } else {
                resp.send(JSON.parse(data));
            }
        });
    } catch (e) {
        console.error('Error occurred:', e);
        resp.status(500).send('Internal Server Error');
    }
});


app.listen(8080, () => {
    console.log("Listening at port 8080")
    fetchAndCacheLanguages()
    fetchAndCachePRDetails()
})