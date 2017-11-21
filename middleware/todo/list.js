const mongo = require('helpers/mongo')

module.exports = function(req, res, next) {
  console.log("API LIST")

  mongo.list((err, result) => {
    console.log('Return from mongo')
    if (err) {
      next(err)
    } else {
      console.log('list got result')
      res.reply(result)
    }
  })
}
