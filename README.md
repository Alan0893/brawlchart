# brawlchart
**API Wrapper for Brawlify Trophy Graphs.**

## Before you Start
➤ Due to player and club data being private, you will be required to use a unique API Token that can only be obtained through the developer of Brawlify.

## Getting Started
1. To install this package, in your console run: `git clone https://github.com/Alan0893/brawlchart.git` 
2. In your package.json, add `"brawlchart": "file:brawlchart"` in your dependencies
3. You have now installed the package!

```javascript
const brawlchart = require("brawlchart")        //includes the brawlchart module
const token      = "Your Token"                 //your unique API token
const client     = new brawlchart.Client(token) //creates a new brawlchart Client

;(async() => {
  const player     = await client.getPlayer("#PLAYERTAG")
  const playerClub = await client.getClub("#CLUBTAG")
})()
```
<img src="https://cdn.brawlify.com/front/Star.svg" height="15" width="20" alt="Brawlify"> This package was made possible, using the data provided by [Brawlify](https://brawlify.com/).
