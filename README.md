# brawlchart
**API Wrapper for Brawlify Trophy Graphs.**

## Before you Start
➤ Due to player and club data being private, you will be required to use a unique API Token that can only be obtained through the developer of Brawlify.

## Getting Started
1. To install this package, in your console run: `npm i brawlchart` or `npm install brawlchart`
2. You have now installed the npm package!

```javascript
const brawlchart = require("brawlchart")        //includes the brawlchart module
const token      = "Your Token"                 //your unique API token
const client     = new brawlchart.Client(token) //creates a new brawlchart Client

;(async() => {
  const player     = await client.getPlayer("#PLAYERTAG")
  const playerClub = await client.getClub("#CLUBTAG")
})()
```
![Brawlify](https://cdn.brawlify.com/front/Star.svg) This package was made possible, using the data provided by [Brawlify](https://brawlify.com/).
