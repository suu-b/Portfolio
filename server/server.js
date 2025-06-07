const express = require('express');
const cors = require('cors');
const axios = require('axios');
const xml2js = require('xml2js');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

app.get('/substack', async (req, res) => {
    const substackHandle = process.env.SUBSTACK_HANDLE;
    try {
        const response = await axios.get(`https://${substackHandle}.substack.com/feed`);
        
        const parser = new xml2js.Parser({ explicitArray: false });
        const parsed = await parser.parseStringPromise(response.data);

        const items = parsed.rss.channel.item;

        const articles = Array.isArray(items) ? items : [items];

        const simplified = articles.map(article => ({
            title: article.title,
            link: article.link,
            pubDate: article.pubDate,
            description: article.description
        }));
        res.status(200).json(simplified);
    } catch (e) {
        console.error("Error fetching Substack RSS feed:", e);
        res.status(500).send("Error fetching Substack RSS feed");
    }
});
