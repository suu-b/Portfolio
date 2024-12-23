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
        let existingData = {}
        if (fs.existsSync(filePath)) {
            existingData = JSON.parse(fs.readFileSync(filePath))
        }
        existingData.languages = languages
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2))
        console.log("SUCCESS: Language Data written.")

    } catch (error) {
        console.log(error)
    }
}

const fetchAndCacheOrgsPRDetails = async () => {
    try {
        const repos = await fetchRepos()
        let totalPersonalPRs = 0
        for (let repo of repos) {
            const response = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/pulls?state=all`, { headers: { 'Authorization': `token ${token}` } })
            totalPersonalPRs += response.data.length
        }
        let existingData = {}
        if (fs.existsSync(filePath)) {
            existingData = JSON.parse(fs.readFileSync(filePath))
        }
        existingData.totalPersonalPRs = totalPersonalPRs
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2))
        console.log("SUCCESS: Personal PRs Data written.")
    } catch (error) {
        console.log(error)
    }
}

const fetchAndCachePersonalPRDetails = async () => {
    try {
        const repos = await fetchRepos()
        let totalPersonalPRs = 0
        for (let repo of repos) {
            const response = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/pulls?state=all`, { headers: { 'Authorization': `token ${token}` } })
            totalPersonalPRs += response.data.length
        }
        let existingData = {}
        if (fs.existsSync(filePath)) {
            existingData = JSON.parse(fs.readFileSync(filePath))
        }
        existingData.totalPersonalPRs = totalPersonalPRs
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2))
        console.log("SUCCESS: Personal PRs Data written.")
    } catch (error) {
        console.log(error)
    }
}

const fetchPRDetails = async(user, repos) => {
    try {
        let count = 0
        for (let repo of repos) {
            const response = await axios.get(`https://api.github.com/repos/${user}/${repo.name}/pulls?state=all`, { headers: { 'Authorization': `token ${token}` } })
            count = response.data.length
        }
        console.log("SUCCESS: Personal PRs Data written.")
        return count
    } catch (error) {
        console.log(error)
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
    fetchAndCacheLanguages()
    fetchOrgs()
    console.log("Listening at port 8080")
})