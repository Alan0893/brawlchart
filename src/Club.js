class Club {
  constructor(data) {
    this.tag      = data.tag
    this.number   = data.number
    this.daily    = data.number.daily
    this.weekly   = data.number.weekly
    this.seasonal = data.number.seasonal
    this.labels   = data.labels
    this.data     = data.data
  }
  
}

module.exports = Club
