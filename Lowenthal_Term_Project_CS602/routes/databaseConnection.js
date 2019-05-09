const mongoose = require('mongoose');
const credentials = require("../credentials.js");

const dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

let connection1 = null;
let productModel = null;

const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;//makes ES6 promises available through Mongoose

const productSchema = new Schema({//ccreates database model for the products
	productId: String,//link this to the productId in customer orders
    productName: String,
    productDescription: String,
    productPrice: Number,
    productQuantity: Number,
});

module.exports.getProductModel = 
	() => {
		if (connection1 == null) {
			console.log("Creating connection and product model...");
			connection1 = mongoose.createConnection(dbUrl);
			productModel = connection1.model("productModelJL", productSchema);
		};
		return productModel;
	};
























