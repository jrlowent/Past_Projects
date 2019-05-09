const mongoose = require('mongoose');
const credentials = require("./credentials.js");

const databaseUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

const connection = mongoose.createConnection(databaseUrl);

const ProductsDatabase = require('./routes/databaseConnection.js');
const Product = ProductsDatabase.getProductModel(connection);

connection.on("open", () => {
	
	// create and save document objects
	let product;

	product = new Product({
		productId: "1a",//links to unique MongoDb in databaseConnection module
        productName: "drum set",
        productDescription: "This is a 6-piece drumset, made of maple. Hardware included",
        productPrice: 1499.99,
        productQuantity: 10,
	}); 
	//course.save();

	product.save((err) => {
		connection.close();
		if (err) {
            throw err;
        };
		console.log("Success!");
	});
	
});










