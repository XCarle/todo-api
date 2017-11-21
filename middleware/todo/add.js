const mongo = require('helpers/mongo')

module.exports = function(req, res, next) {
  console.log("API ADD")

  mongo.add("value", (err, result) => {
    if (err) {
      next(err)
    } else {
      res.reply(result)
    }
  })
}
