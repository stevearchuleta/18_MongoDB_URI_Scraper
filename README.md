# MongoDB_URI_week18HW


https://week18homework.herokuapp.com/
https://git.heroku.com/week18homework.git
https://stevearchuleta.github.io/MongoDB_URI_week18HW/
https://github.com/stevearchuleta/MongoDB_URI_week18HW

Creating mongolab on ⬢ week18homework... free
Welcome to mLab.  Your new subscription is being created and will be available shortly.  Please consult the mLab Add-on Admin UI to check on its progress.
Created mongolab-rugged-61427 as MONGODB_URI

The New York Time Scraper
Overview
The New York Time Scraper (NYT Scraper for short) is a scraper app which captures the title, summary, and image of articles inside The New York Times. In this app, users are able to save their preferred articles, add notes for each article, and edit their notes to one - or multiple - articles. This app also provides a search feature, allowing users to search titles according to different key words.

In this repository, you can see source code of NYT Scraper. For experiencing, please go to Heroku:

https://week18homework.herokuapp.com/

Key Dependencies:
request: enables cheerio to get access to front-end code of https://www.nytimes.com/section/world

cheerio: scrapes front-end code from https://www.nytimes.com/section/world

mongoose: be in charge of database of NYT Scraper

express: builds server-side routes and functions

morgan: logs server-side requests; helps with debugging.

express-handlebars: a powerful front-end builder without requiring multiple html pages