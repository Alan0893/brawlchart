const fetch = require('node-fetch')
const baseURL = 'https://api.brawlapi.com/v1/'

const APIError = require('./APIError')

class HTTP {
  constructor(client) {
    this.client = client
  }

  getHeaders() {
    return {
      Authorization: `${this.client.token}`,
      Accept: 'application/json'
    }
  }

  async requestAsync(endpoint) {
    const res = await fetch(baseURL + endpoint, {
      headers: this.getHeaders()
    })
    if (!res.ok) throw new APIError(res, await res.text())
    return await res.json()
  }

  async getPlayer(tag) {
    tag = tag.toUpperCase()
    return await this.requestAsync(`graphs/player/${tag.replace("#", "")}`)
  }

  async getClub(tag) {
    tag = tag.toUpperCase()
    return await this.requestAsync(`graphs/club/${tag.replace("#", "")}`)
  }
}

module.exports = HTTP
