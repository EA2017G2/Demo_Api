module.exports = {
  port: process.envPORT || 3001,
  db: process.env.MONGODB || 'mongodb://localhost:27017/shop'
}
