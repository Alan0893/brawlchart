class Player {
  constructor(data) {
    this.tag      = data.tag
    this.number   = data.number
    this.daily    = data.number.daily
    this.weekly   = data.number.weekly
    this.seasonal = data.number.seasonal
    this.labels   = data.labels
    this.data     = data.data
  }
  
  /**
   * @returns {String} player tag
   */
  getTag() {
    return this.tag
  }

  /**
   * @returns {object} trophy progression - daily, weekly, seasonal
   */
  getNumber() {
    return this.number
  }

  /**
   * @returns {number} numbers of trophies gained daily
   */
  getDaily() {
    return this.number.daily
  }

  /**
   * @returns {number} numbers of trophies gained weekly
   */
  getWeekly() {
    return this.number.weekly
  }
  
  /**
   * @returns {number} numbers of trophies gained seasonal
   */
  getSeasonal() {
    return this.number.seasonal
  }
  
  /**
   * @returns {object} data of dates tracked
   */
  getLabels() {
    return this.labels
  }
  
  /**
   * @returns {object} data of trophies
   */
  getData() {
    return this.data
  }
}
  
function error(txt) {
  return TypeError(txt)
}

module.exports = Player
