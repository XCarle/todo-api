const mongoClient = require('mongodb').MongoClient

const mongo = {}

mongo.add = function(value, done = () => {}) {
  console.log('Mongo Add')
  mongoClient.connect("mongodb://localhost:27017/todoDB", function(err, db) {
    if(err) {
      console.log("Error connecting : ", err)
      done(err, null)
    }

    const collection = db.collection('todoDB');
    const doc1 = {'hello':'doc1'};
    //var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

    collection.insert(doc1)

    db.close()

    done(null, params)

  })

}

mongo.update = function(id, value, done = () => {}) {
  console.log('Mongo update')

  mongoClient.connect("mongodb://localhost:27017/todoDB", function(err, db) {
    if(err) {
      console.log("Error connecting : ", err)
      done(err, null)
    }

    var collection = db.collection('todoDB');
    var doc1 = {'hello':'doc1'};
    var doc2 = {'hello':'doc2'};
    var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

    collection.insert(doc1, function(err, result) {
        if (err){
          done(err, null)
        } else {
          done(null, params)
        }
        db.close()
    })
  })
}

mongo.delete = function(value, done = () => {}) {
  console.log('Mongo delete')

  mongoClient.connect("mongodb://localhost:27017/todoDB", function(err, db) {
    if(err) {
      console.log("Error connecting : ", err)
      done(err, null)
    }

    var collection = db.collection('todoDB');
    var doc1 = {'hello':'doc1'};
    var doc2 = {'hello':'doc2'};
    var docs = [{'hello':'doc3'}, {'hello':'doc4'}];

    collection.insert(docs, {w:1}, function(err, result) {
      collection.remove({mykey:1}, {w:1}, function(err, result){
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
