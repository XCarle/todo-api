const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.error = (err, statusCode = 200) => {
    let time = Date.now() - req.start
    console.log(req.method, req.path, req.body, statusCode, `(${time}ms)`, err)
    res.setHeader('Content-Type', 'application/json')
    if (statusCode !== 200) { res.status(statusCode) }
    res.send({
      status: 'ko',
      error: err,
    })
  }

  res.reply = (result) => {
    let time = Date.now() - req.start
    console.log(req.method, req.path, req.body, 200, `(${time}ms)`)
    res.setHeader('Content-Type', 'application/json')
    res.send({
      status: 'ok',
      response: result,
    })
  }
  return next()
})

require('./routesFreeAccess')(app)

app.use((err, req, res, next) => {
  res.error(err.message || err, err.statusCode)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
