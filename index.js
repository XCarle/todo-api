const express = require('express')
const app = express()
const mongoClient = require('mongodb').MongoClient

mongoClient.connect("mongodb://localhost:27017/todoDB", function(err, db) {
  if(!err) {
    console.log("We are connected")
  } else {
    console.log("Error connecting : ", err)
  }

  var collection = db.collection('todoDB');
  var doc1 = {'hello':'doc1'};
  var doc2 = {'hello':'doc2'};
  var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

  collection.insert(doc1)

  collection.insert(doc2, {w:1}, function(err, result) {});

  collection.insert(lotsOfDocs, {w:1}, function(err, result) {});

  collection.find().toArray(function(err, items) {
    if (err) {
      console.log('error while inserting : ', err)
    } else {
      console.log('Items : ', items)
    }
  })
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
