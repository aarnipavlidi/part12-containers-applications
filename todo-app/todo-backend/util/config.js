require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL
const REDIS_URL = process.env.REDIS_URL
const REDIS_PORT = process.env.REDIS_PORT

module.exports = {
  MONGO_URL,//: 'mongodb://the_username:the_password@localhost:3456/the_database',
  REDIS_URL,//: '//localhost:6378'
  REDIS_PORT
}
