// lectura de registros
db.nameCollection.find()

db.users.find({
     age: {$gt: 18} // criteria
    }
).limit(5);