const RSSParser = require("rss-parser");
const parser = new RSSParser();

const SUBSTACK_HANDLE = process.env.SUBSTACK_HANDLE;
const SUBSTACK_FEED = `https://${SUBSTACK_HANDLE}.substack.com/feed`;

exports.handler = async () => {
  try {
    const feed = await parser.parseURL(SUBSTACK_FEED);
    const articles = feed.items || [];

    const simplified = articles.map((article) => ({
      title: article.title,
      link: article.link,
      pubDate: article.pubDate,
      description: article.contentSnippet || article.content || "",
    }));

    return {
      statusCode: 200,
      headers: {
        "Cache-Control": "public, max-age=604800",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ simplified }),
    };
  } catch (err) {
    console.error("Error occurred while fetching and caching the articles:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Error occurred while fetching and caching the articles.",
      }),
    };
  }
};
