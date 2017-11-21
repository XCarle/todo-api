const mongo = require('helpers/mongo')

module.exports = function(req, res, next) {
  console.log("API ADD")

  mongo.add("value", "status", (err, result) => {
    if (err) {
      next(err)
    } else {
      res.reply(result)
    }
  })
}
