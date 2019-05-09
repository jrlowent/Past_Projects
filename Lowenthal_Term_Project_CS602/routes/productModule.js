const dbAccess = require('./databaseConnection.js');
const Products = dbAccess.getProductModel();
const shoppingCart = require('../model/cart.js');

module.exports.landingPage = 
    (req, res, next) => {
        res.render('landing');
    };

//Customer Functionality=====================================================================================

module.exports.customerDisplayProducts =//this should be all products, separate view for display after search
    (req, res, next) => {

        Products.find({}, (err, products) => {
            if (err) {
                console.log("Error: %s ", err);
            };
            let allProducts = products.map( (product) => {
                return {
                    id: product._id,
                    productId: product.productId,
                    productName: product.productName,
                    productDescription: product.productDescription,
                    productPrice: product.productPrice,
                    productQuantity: product.productQuantity
                };
            });
            res.render('customer/cDisplayProductsView',
                {
                    title: "Products We Sell",
                    data: allProducts,
                } 
            );
        });

    };

module.exports.customerSearchProducts =
    (req, res, next) => {
        res.render('customer/cSearchProductsView',
            {
                title:"Specific Instrument in Mind?",
            }
        );
    };

module.exports.customerSearchByName = 
    (req, res, next) => {
        let reqSearch = req.body.search_by_name; //gets productName from requestbody

        Products.find({productName: reqSearch}, (err, products) => {
            if (err) {
                console.log("Error: %s ", err);
            };
            let returnedProducts = products.map( (product) => {
                return { //returns an array of objects
                    id: product._id,
                    productId: product.productId,
                    productName: product.productName,
                    productDescription: product.productDescription,
                    productPrice: product.productPrice,
                    productQuantity: product.productQuantity
                };
            });
            res.format({
                'application/json': () => {
                    res.json(returnedProducts);
                },
        
                'application/xml': () => {
                    let productsXml = 
                        '<?xml version="1.0"?>\n<products>\n' +
                        returnedProducts.map(function(product){
                              return '<product id="' + product.id + '">\n' +
                                '<productID>' + product.productId + '</productID>\n' +
                                '<productName>' + product.productName + '</productName>\n' +
                                '<productDescription>' + product.productDescription + '</productDescription>\n' +
                                '<productPrice>' + product.productPrice + '</productPrice>\n' +
                                '<productQuantity>' + product.productQuantity + '</productQuantity>\n' + 
                                '</product>'}).join('\n') + '\n</products>';
                    res.type('application/xml');
                    res.send(productsXml);
                },
        
                'text/html': () => {
                    res.render('customer/cDisplayProductsView',
                        {
                            title: "Your Search Results",
                            data: returnedProducts
                        } 
                    );
                },
            }); //takes productname from request, uses it in db query
        });
    };

module.exports.customerSearchByDescription =//model after admin search by description
    (req, res, next) => {

        let reqSearch = req.body.search_by_description; //gets productName from requestbody
        
        //trim whitespace on either end, and lowercase
        reqSearch = reqSearch.trim().toLowerCase();
        let descriptionMatchedProducts = []; //initialize match array
        Products.find({}, (err, products) => {//get all products from database
            if (err) {
                console.log("Error: %s ", err);
            };               
            //loop through product descriptions
            for (let i = 0; i < products.length; i++) {
                //lowercase each description from database
                let currentProductDescription = products[i].productDescription.trim().toLowerCase();
                //search() method to find a match to the descriptions in the database
                if (currentProductDescription.search(reqSearch) !== -1) {
                    //if there is a match, push those products to an array
                    descriptionMatchedProducts.push(products[i]);
                };
            };
            let returnedProducts = descriptionMatchedProducts.map( (product) => {
                return { //returns an array of objects
                    id: product._id,
                    productId: product.productId,
                    productName: product.productName,
                    productDescription: product.productDescription,
                    productPrice: product.productPrice,
                    productQuantity: product.productQuantity
                };
            });
            //console.log(allProducts);
            res.format({
                'application/json': () => {
                    res.json(returnedProducts);
                },
        
                'application/xml': () => {
                    let productsXml = 
                        '<?xml version="1.0"?>\n<products>\n' +
                        returnedProducts.map(function(product){
                              return '<product id="' + product.id + '">\n' +
                                '<productID>' + product.productId + '</productID>\n' +
                                '<productName>' + product.productName + '</productName>\n' +
                                '<productDescription>' + product.productDescription + '</productDescription>\n' +
                                '<productPrice>' + product.productPrice + '</productPrice>\n' +
                                '<productQuantity>' + product.productQuantity + '</productQuantity>\n' + 
                                '</product>'}).join('\n') + '\n</products>';
                    res.type('application/xml');
                    res.send(productsXml);
                },
        
                'text/html': () => {
                    res.render('customer/cDisplayProductsView',
                        {
                            title: "Your Search Results",
                            data: returnedProducts
                        } 
                    );
                },
            });
        });
    };

module.exports.customerAddCart =
    (req, res, next) => {
        let id = req.params.id;//id of item to be added to cart
        let quantityAdded = req.body.quantity_added;

        Products.findById(id, (err, product) => {//asks database for item by id
            if(err) {
                console.log("Error Selecting : $s ", err);
            };

            if(!product) {
                return res.render('404');
            };

            if (product.productQuantity > 0) {
                let productAdded = {//organizes data from database about product into object
                    id: id,//from the request object
                    productId: product.productId,
                    productName: product.productName,
                    productDescription: product.productDescription,
                    productPrice: product.productPrice,
                    productQuantity: product.productQuantity,
                    quantityAdded: quantityAdded
                }; 
                //send the product data array to the cart view
                shoppingCart.addedProducts.push(productAdded);//pushes product object to array

                Products.find({}, (err, products) => {
                    if (err) {
                        console.log("Error: %s ", err);
                    };
                    let allProducts = products.map( (product) => {
                        return {
                            id: product._id,
                            productId: product.productId,
                            productName: product.productName,
                            productDescription: product.productDescription,
                            productPrice: product.productPrice,
                            productQuantity: product.productQuantity
                        };
                    });
                    res.render('customer/cDisplayProductsView',
                        {
                            title: "Products We Sell",
                            data: allProducts,
                            message: "Your selection was added to the cart!"
                        } 
                    );
                });
            } else {
                Products.find({}, (err, products) => {
                    if (err) {
                        console.log("Error: %s ", err);
                    };
                    let allProducts = products.map( (product) => {
                        return {
                            id: product._id,
                            productId: product.productId,
                            productName: product.productName,
                            productDescription: product.productDescription,
                            productPrice: product.productPrice,
                            productQuantity: product.productQuantity
                        };
                    });
                    res.render('customer/cDisplayProductsView',
                        {
                            title: "Products We Sell",
                            data: allProducts,
                            message: "Sorry, the product you want is out of stock. Check back again soon!"
                        } 
                    );
                });
            };
        });
    };

module.exports.customerViewCart = 
    (req, res, next) => {
        //send the shopping cart data to the view cart page
        res.render('customer/cCartView',
            {
                title: "Your Cart",
                data: shoppingCart
            } 
        );

    };

module.exports.customerRemoveItem = 
    (req, res, next) => {
        let id = req.params.id;

        for (let i = 0; i < shoppingCart.addedProducts.length; i++) {
            if (shoppingCart.addedProducts[i].id === id) {
                shoppingCart.addedProducts.splice(i, 1);
                break;
            };
        };
        res.render('customer/cCartView',
            {
                title: "Your Cart",
                data: shoppingCart
            } 
        );

    };

module.exports.customerCheckout = 
    
    (req, res, next) => {

        let total = 0;
        for (let i = 0; i < shoppingCart.addedProducts.length; i++) {
            total += shoppingCart.addedProducts[i].productPrice * Number(shoppingCart.addedProducts[i].quantityAdded); 
        };

        res.render('customer/cCheckoutView', 
            {
                title: "Checkout",
                data: {shoppingCart, total}
            }
        );
    };

module.exports.customerConfirmCheckout =

    (req, res, next) => {
        
        let orderTotal = req.body.order_total;

        for (let i = 0; i < shoppingCart.addedProducts.length; i++) {//loops through each cart item
            //get quantityAdded of each item
            let currentQuantityAdded = shoppingCart.addedProducts[i].quantityAdded;
            console.log(currentQuantityAdded);
            //get database id of each item
            let currentDatabaseID = shoppingCart.addedProducts[i].id;
            console.log(currentDatabaseID);
            //find current product by id
            Products.findById(currentDatabaseID, (err, product) => {//asks database for item by id
                if(err) {
                    console.log("Error Selecting : $s ", err);
                };
    
                if(!product) {
                    return res.render('404');
                };
                //subtract quantityAdded from product quantity of product from database
                product.productQuantity = product.productQuantity - currentQuantityAdded;
                //save database product
                product.save((err) => {//updates in database
                    if (err) {
                        console.log("Error updating : %s ",err );
                        res.redirect("/customer/view_cart");
                    };
                });
            });
        };

        //render the confirmation page
        res.render('customer/cConfirmationView', 
            {
                title: 'Order Confirmation'
            }
        );
        shoppingCart.addedProducts = []; //empty shopping cart
    };

//Admin Functionality================================================================================

module.exports.adminDisplayProducts =
    (req, res, next) => {
        Products.find({}, (err, products) => {
            if (err) {
                console.log("Error: %s ", err);
            };
            let returnedProducts = products.map( (product) => {
                return {
                    id: product._id,
                    productId: product.productId,
                    productName: product.productName,
                    productDescription: product.productDescription,
                    productPrice: product.productPrice,
                    productQuantity: product.productQuantity
                };
            });
            res.render('admin/aDisplayProductsView',
                {
                    title: "Your Store's Products",
                    data: returnedProducts
                } 
            );
        });
    };

module.exports.adminSearchProducts =
    (req, res, next) => {
        res.render('admin/aSearchProductsView',
            {
                title:"Specific Instrument in Mind?",
            }
        );
    };

module.exports.adminSearchByName = 
    (req, res, next) => {
        let reqSearch = req.body.search_by_name; //gets productName from requestbody        
        Products.find({productName: reqSearch}, (err, products) => {
            if (err) {
                console.log("Error: %s ", err);
            };
            let returnedProducts = products.map( (product) => {
                return { //returns an array of objects
                    id: product._id,
                    productId: product.productId,
                    productName: product.productName,
                    productDescription: product.productDescription,
                    productPrice: product.productPrice,
                    productQuantity: product.productQuantity
                };
            });
            //console.log(allProducts);
            res.format({
                'application/json': () => {
                    res.json(returnedProducts);
                },
        
                'application/xml': () => {
                    let productsXml = 
                        '<?xml version="1.0"?>\n<products>\n' +
                        returnedProducts.map(function(product){
                              return '<product id="' + product.id + '">\n' +
                                '<productID>' + product.productId + '</productID>\n' +
                                '<productName>' + product.productName + '</productName>\n' +
                                '<productDescription>' + product.productDescription + '</productDescription>\n' +
                                '<productPrice>' + product.productPrice + '</productPrice>\n' +
                                '<productQuantity>' + product.productQuantity + '</productQuantity>\n' + 
                                '</product>'}).join('\n') + '\n</products>';
                    res.type('application/xml');
                    res.send(productsXml);
                },
        
                'text/html': () => {
                    res.render('admin/aDisplayProductsView',
                        {
                            title:"Your Search Results",
                            data: returnedProducts
                        } 
                    );
                },
            }); //takes productname from request, uses it in db query
        });
    };

module.exports.adminSearchByDescription = 
    (req, res, next) => {
        let reqSearch = req.body.search_by_description; //gets productName from requestbody
        
        //trim whitespace on either end, and lowercase
        reqSearch = reqSearch.trim().toLowerCase();
        let descriptionMatchedProducts = []; //initialize match array
        Products.find({}, (err, products) => {//get all products from database
            if (err) {
                console.log("Error: %s ", err);
            };               
            //loop through product descriptions
            for (let i = 0; i < products.length; i++) {
                //lowercase each description from database
                let currentProductDescription = products[i].productDescription.trim().toLowerCase();
                //search() method to find a match to the descriptions in the database
                if (currentProductDescription.search(reqSearch) !== -1) {
                    //if there is a match, push those products to an array
                    descriptionMatchedProducts.push(products[i]);
                };
            };
            let returnedProducts = descriptionMatchedProducts.map( (product) => {//change to descriptionMatchProducts
                return { //returns an array of objects
                    id: product._id,
                    productId: product.productId,
                    productName: product.productName,
                    productDescription: product.productDescription,
                    productPrice: product.productPrice,
                    productQuantity: product.productQuantity
                };
            });
            res.format({
                'application/json': () => {
                    res.json(returnedProducts);
                },
        
                'application/xml': () => {
                    let productsXml = 
                        '<?xml version="1.0"?>\n<products>\n' +
                        returnedProducts.map(function(product){
                              return '<product id="' + product.id + '">\n' +
                                '<productID>' + product.productId + '</productID>\n' +
                                '<productName>' + product.productName + '</productName>\n' +
                                '<productDescription>' + product.productDescription + '</productDescription>\n' +
                                '<productPrice>' + product.productPrice + '</productPrice>\n' +
                                '<productQuantity>' + product.productQuantity + '</productQuantity>\n' + 
                                '</product>'}).join('\n') + '\n</products>';
                    res.type('application/xml');
                    res.send(productsXml);
                },
        
                'text/html': () => {
                    res.render('admin/aDisplayProductsView',
                        {
                            title:"Your Search Results",
                            data: returnedProducts
                        } 
                    );
                },
            }); //takes productname from request, uses it in db query
        });        
    };

module.exports.adminAddProduct = 
    (req, res, next) => {
        res.render('admin/aAddProductView',//brings user to addEmployee view 
	  		{title:"Add a Product"});//inserts title
    };

module.exports.adminSaveProduct = 
    (req, res, next) => {

        let product = new Products({//creates new product object based on POST data
            productId:          req.body.product_id,
            productName:        req.body.product_name,
            productDescription: req.body.product_description,
            productPrice:       req.body.product_price,
            productQuantity:    req.body.product_quantity,
        }); 
        
        product.save((err) => {//save in mongodb
            if(err)
                console.log("Error : %s ",err);
            res.redirect('/admin/products');//redirects to displayEmployees view
        });
    };
    
module.exports.adminEditProduct = 
    (req, res, next) => {
        let id = req.params.id;

        Products.findById(id, (err, product) => {
            if(err)
                console.log("Error Selecting : $s ", err);
            if(!product)
                return res.render('404');

            res.render('admin/aEditProductView',
                {
                    title: "Edit Product",
                    data: {
                        id: id,
                        productId: product.productId,
                        productName: product.productName,
                        productDescription: product.productDescription,
                        productPrice: product.productPrice,
                        productQuantity: product.productQuantity,
                    }, 
                }
            );
            
        });
    };

module.exports.adminSaveEdit = 
    (req, res, next) => {
        let id = req.params.id;

        Products.findById(id, (err, product) => {//searches in the database for product with id
            if(err)
                console.log("Error Selecting : %s ", err); 
            if (!product)
                return res.render('404');
            //organizes request body data to be stored in product document
            product.productId = req.body.product_id;
            product.productName = req.body.product_name;
            product.productDescription = req.body.product_description;
            product.productPrice = req.body.product_price;
            product.productQuantity = req.body.product_quantity;

            product.save((err) => {//updates in database
                if (err)
                    console.log("Error updating : %s ",err );
                res.redirect("/admin/products");
            });
        });
    };

module.exports.adminDeleteProduct = 
    (req, res, next) => {
        let id = req.params.id;//gets product id from request parameters
	    
	    Products.findById(id, (err, product) => {//finds product by mongodb ID, takes product from db as argument
	      if(err)
	        console.log("Error Selecting : %s ", err); 
	      if (!product)
	        return res.render('404');
	      
	      product.remove( (err) => {//removes employee from database
	        if (err)
	          console.log("Error deleting : %s ",err );
	        res.redirect('/admin/products');//redirects to aDisplayProducts view
	      });        
	    });
    };
