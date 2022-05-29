# DEPRECATED - brawlchart
**API Wrapper for Brawlify Trophy Graphs.**

## Before you Start
➤ Due to player and club data being private, you will be required to use a unique API Token that can only be obtained through the developer of Brawlify.

## Getting Started
1. To install this package, in your console run: `git clone https://github.com/Alan0893/brawlchart.git` 
2. In your package.json, add `"brawlchart": "file:brawlchart"` in your dependencies
3. You have now installed the package!

### Problems with `git`
> **'git' is not recognized as an internal or external command, operable program or batch file.**
If you get the error stated above, follow the instructions below:
1. Open VS Code
2. Hit `ctrl + ,`
3. In the seach bar, type `git path`
4. Click `add this path`
5. You should now be able to use `git` in VS Code

## Example
```javascript
const brawlchart = require("brawlchart")        //includes the brawlchart module
const token      = "Your Token"                 //your unique API token
const client     = new brawlchart.Client(token) //creates a new brawlchart Client

;(async() => {
  const player     = await client.getPlayer("#PLAYERTAG") //Fetches a player stats as given in the parameter  
  const playerClub = await client.getClub("#CLUBTAG")     //Fetches a club stats as given in the parameter
})()
```
More examples pertaining to player and club data can be found [here](https://github.com/Alan0893/brawlchart/blob/main/examples/test.js).

<img src="https://cdn.brawlify.com/front/Star.svg" height="15" width="20" alt="Brawlify"> This package was made possible, using the progression data provided by [Brawlify](https://brawlify.com/).
