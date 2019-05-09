//set up for XML and JSON here
const express = require("express");
const router = express.Router();
const productModule = require("./productModule.js");

//functions from productModule, to be triggered per HTTPrequests

//general routes
const landingPage = productModule.landingPage;

//customer routes
const customerDisplayProducts = productModule.customerDisplayProducts;
const customerSearchProducts = productModule.customerSearchProducts;
const customerSearchByName = productModule.customerSearchByName;
const customerSearchByDescription = productModule.customerSearchByDescription;
const customerAddCart = productModule.customerAddCart;
const customerViewCart = productModule.customerViewCart;
const customerRemoveItem = productModule.customerRemoveItem;
const customerCheckout = productModule.customerCheckout;
const customerConfirmCheckout = productModule.customerConfirmCheckout;

//admin routes
const adminDisplayProducts = productModule.adminDisplayProducts;
const adminSearchProducts = productModule.adminSearchProducts;
const adminSearchByName = productModule.adminSearchByName;
const adminSearchByDescription = productModule.adminSearchByDescription;
const adminEditProduct = productModule.adminEditProduct;
const adminSaveEdit = productModule.adminSaveEdit;
const adminAddProduct = productModule.adminAddProduct;
const adminSaveProduct = productModule.adminSaveProduct;
const adminDeleteProduct = productModule.adminDeleteProduct;

//handles default get request
router.get("/", (req, res, next) => {
    res.redirect("/index");
});

//both customer and admin
router.get("/index", landingPage);

//customer functionality
router.get("/customer/products", customerDisplayProducts);
router.get("/customer/search", customerSearchProducts);
router.post("/customer/search_by_name", customerSearchByName);
router.post("/customer/search_by_description", customerSearchByDescription);//finish routing and function
router.post("/customer/add_cart/:id", customerAddCart);
router.get("/customer/view_cart", customerViewCart);
router.get("/customer/remove_item/:id", customerRemoveItem);
router.get("/customer/checkout", customerCheckout);
router.post("/customer/confirm_checkout", customerConfirmCheckout);

//admin functionality
router.get("/admin/products", adminDisplayProducts);
router.get("/admin/search", adminSearchProducts);
router.post("/admin/search_by_name", adminSearchByName);
router.post("/admin/search_by_description", adminSearchByDescription);//finish routing and function
router.get("/admin/add_product", adminAddProduct);
router.post("/admin/add_product", adminSaveProduct);
router.get("/admin/edit_product/:id", adminEditProduct);
router.post("/admin/edit_product/:id", adminSaveEdit);
router.get("/admin/delete_product/:id", adminDeleteProduct);


module.exports = router;//exports router function to be implemented