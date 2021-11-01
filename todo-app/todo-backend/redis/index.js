const redis = require('redis')
const { promisify } = require('util')
const { REDIS_URL, REDIS_PORT } = require('../util/config')

let getAsync
let setAsync

if (!REDIS_URL || !REDIS_PORT) {
  const redisIsDisabled = () => {
    console.log('No REDIS_URL set, Redis is disabled')
    return null
  }
  getAsync = redisIsDisabled
  setAsync = redisIsDisabled
} else {

  const client = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT
  })

  getAsync = promisify(client.get).bind(client)
  setAsync = promisify(client.set).bind(client)
}

module.exports = {
  getAsync,
  setAsync
}
