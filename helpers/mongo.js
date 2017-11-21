const mongoClient = require('mongodb').MongoClient

const mongo = {}

mongo.add = function(value, status, done = () => {}) {
  console.log('Mongo Add')
  mongoClient.connect("mongodb://localhost:27017/todoDB", function(err, db) {
    if(err) {
      console.log("Error connecting : ", err)
      done(err, null)
    }

    const collection = db.collection('todoDB');
    const todo = {'value':value, 'status': status};

    collection.insert(doc1)

    db.close()

    done(null, params)

  })

}

mongo.update = function(_value, newValue, done = () => {}) {
  console.log('Mongo update')

  mongoClient.connect("mongodb://localhost:27017/todoDB", function(err, db) {
    if(err) {
      console.log("Error connecting : ", err)
      done(err, null)
    }

    var collection = db.collection('todoDB');

    collection.update({value: _value}}, {$set: {value: newValue}}, {w:1}, function(err, result) {
        if (err){
          done(err, null)
        } else {
          done(null, params)
        }
        db.close()
    })
  })
}

mongo.delete = function(_value, done = () => {}) {
  console.log('Mongo delete')

  mongoClient.connect("mongodb://localhost:27017/todoDB", function(err, db) {
    if(err) {
      console.log("Error connecting : ", err)
      done(err, null)
    }

    var collection = db.collection('todoDB');

    collection.insert(docs, {w:1}, function(err, result) {
      collection.remove({value:_value}, {w:1}, function(err, result){
        if (err) {
          console.log("error removing")
          done(err, null)
        } else {
          console.log(result, ' elements removed')
          done(null, params)
        }
        db.close()
      })
    })
  })
}

mongo.list = function(done = () => {}) {

  mongoClient.connect("mongodb://localhost:27017/todoDB", function(err, db) {
    if(err) {
      console.log("Error connecting : ", err)
      done(err, null)
    }

    var collection = db.collection('todoDB');

    collection.find().toArray(function(err, items) {
      if (err) {
        console.log('error while inserting : ', err)
        done(err, null)
      } else {
        console.log('Items : ', items)
        done(null, items)
      }
      db.close()
    })
  })
}

module.exports = mongo
