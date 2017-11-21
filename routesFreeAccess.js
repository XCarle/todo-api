module.exports = function(app) {
  app.get('/', (req, res) => res.send('Welcome to the todo-app API! You might be able to list, add, change and delete todos'))

  app.get('/todo/list', require('middleware/todo/list'))

  app.post('/todo/add', require('middleware/todo/add'))

  app.post('/todo/update', require('middleware/todo/update'))

  app.post('/todo/delete', require('middleware/todo/delete'))
}
