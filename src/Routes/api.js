const express = require("express");
const router = express.Router();
// const controller = require('../Controllers')
const blogController = require("../Controllers/blogController");
const comment = require("../Controllers/commentController");
const message = require("../Controllers/messageController");
const portfolio = require("../Controllers/portfolioController");
const product = require("../Controllers/productController");



// Create Blog API
router.get("/blog/create", blogController.create);

// Read Blog API
router.get("/blog/read", blogController.read);

// Delete Blog API
router.get("/blog/delete", blogController.delete);

// Update Blog API
router.get("/blog/update", blogController.update);


//==================Comment============

// Create Blog Comment
router.get("/comment/create", comment.create);

// Read Blog Comment
router.get("/comment/read", comment.read);

// Delete Blog Comment
router.get("/comment/delete", comment.delete);

// Update Blog Comment
router.get("/comment/update", comment.update);
//==================Message============

// Create Blog Massage
router.get("/message/create", message.create);

// Read Blog Massage
router.get("/message/read", message.read);

// Delete Blog Massage
router.get("/message/delete", message.delete);

// Update Blog Massage
router.get("/message/update", message.update);
//==================Portfolio============

// Create Blog Portfolio
router.get("/portfolio/create", portfolio.create);

// Read Blog Portfolio
router.get("/portfolio/read", portfolio.read);

// Delete Blog Portfolio
router.get("/portfolio/delete", portfolio.delete);

// Update Blog Portfolio
router.get("/portfolio/update", portfolio.update);

//================product============

// Create product
router.get("/product/create", product.create);

// Read product
router.get("/product/read", product.read);

// Delete product
router.get("/product/delete", product.delete);

// Update product
router.get("/product/update", product.update);




module.exports = router;
