const HTTP      = require('./HTTP')
const Club      = require('./Club')
const Player    = require('./Player')

class Client {
  /**
   * @param {string} opts Brawlify API token
   */
  constructor(opts) {
    if (typeof(opts) === 'string') opts = { token: opts }
    if (!opts) throw new Error('No token provided for Brawlify API.')

    this.token = opts.token
    this.http  = new HTTP(this)
  }

  async getPlayer(tag) {
    return new Player(await this.http.getPlayer(tag))
  }

  async getClub(tag) {
    return new Club(await this.http.getClub(tag))
  }
}

module.exports = Client
