## Interval News API
This simple project is a server for News API requests (from "www.newsapi.org") that update the news every 15 minutes and store them in a variable. For that if the newsapi service stop working, the server have the last update stored.

# Get News Request

You can use: "http://yourdomain.you:PORT/news/last" to have the last news. It returns a json response.


# Response Example

{
"status": "ok",
"totalResults": 38,
-"articles": [
-{
-"source": {
"id": "cbs-news",
"name": "CBS News"
},
"author": "CBS News",
"title": "Coronavirus live updates: Outbreak spreads in South Korea and Italy as CDC warning rattles markets - CBS News",
"description": "Hundreds more COVID-19 cases confirmed in South Korea, including a U.S. troop, as death toll nears 3,000 and a CDC warning weighs heavy on stock markets.",
"url": "https://www.cbsnews.com/live-updates/coronavirus-outbreak-death-toll-infections-latest-news-updates-2020-02-26/",
"urlToImage": "https://cbsnews1.cbsistatic.com/hub/i/r/2020/02/26/64634752-3f1c-45c1-b8b5-df09344d8b11/thumbnail/1200x630/ad66c33869c708c255ab89ba3fa804c1/ap-20038176999809.jpg",
"publishedAt": "2020-02-26T18:27:00Z",
"content": "U.S. Health and Human Services Secretary Alex Azar and other health officials are briefing members of Congress on the coronavirus outbreak. Viewers can watch the congressional hearing in the player above.\r\nThe coronavirus epidemic that started in China late l… [+1307 chars]"
},
...
}

# Author 
Samir Salman


