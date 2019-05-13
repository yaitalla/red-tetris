const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/redtetris";
const secret = 'supersecrettetrisred'
mongoose.Promise = global.Promise;
const mongo = require('mongodb');

// mongoose.connect(url, { useNewUrlParser: true}).then(
//   (db) => {
//     console.log('Database connected')
//     db.createCollection("tetrisPlayers", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created");
//       db.close();
//     });
//   },//db.connections[0].name
//   err => { console.log('error Database')}
// );
// MongoClient.connect(url, function(err, db) {   //here db is the client obj
//     if (err) throw err;
//     var dbase = db.db("mydb"); //here
//     dbase.createCollection("customers", function(err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();   //close method has also been moved to client obj
//     });
// });

mongo.connect(url, {useNewUrlParser: true}, (err, db) => {
	if (err) throw err;
	console.log("Database created: redTetris");
	const dbase = db.db('redTetris')
	dbase.createCollection("tetrisPlayers", (err, res) => {
		if (err) throw err;
		console.log("Collection created: tetrisPlayers");
		db.close();
	});
});

module.exports = {
  mongoose,
  url,
  secret
}
