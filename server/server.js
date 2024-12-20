const express = require('express')
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const nodeScheduler = require('node-schedule')
require('dotenv').config()

const username = process.env.GITHUB_USERNAME
const token = process.env.GITHUB_TOKEN

const fetchAndCacheLanguages = async () => {
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
        const languages = {}
        for (let repo of repos) {
            const languagesResponse = await axios.get(repo.languages_url, { headers: { 'Authorization': `token ${token}` } })
            const langs = languagesResponse.data
            for (let [language, amt] of Object.entries(langs)) {
                languages[language] = (languages[language] || 0) + amt
            }
        }
        fs.writeFileSync(path.join(__dirname, 'data', 'data.json'), JSON.stringify(languages, null, 2))
        console.log("Data cached successfully.")
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
    console.log("Listening at port 8080")
})