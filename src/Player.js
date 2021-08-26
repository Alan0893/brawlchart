class Player {
  constructor(data) {
    this.tag      = data.tag
    this.number   = data.number
    this.daily    = data.number.daily
    this.weekly   = data.number.weekly
    this.seasonal = data.number.seasonal
    this.labels   = data.labels
    this.data     = data.data
    this.brawlers = data.brawlers
  }
  
  /**
  * @param {string} id brawler ID
  * @description get player's brawler by ID
  * @returns false if the player doesn't have the brawler || object if the player has the brawler
  */
  getBrawlerById(id) {
    let brawlerById = this.brawlers.filter(x => x.id == id)
    return brawlerById ? brawlerById : false
  }
  
}

module.exports = Player
