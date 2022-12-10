const express = require("express");
const {
  getProducts,
  newProduct,
  deleteProduct,
} = require("../controllers/productsController");
// const {
//   newProduct,
//   getProducts,
//   deleteProduct,
// } = require("../../server/controllers/productsController");

const router = express.Router();

// ------- Routes --------
router.route("/get-all").get(getProducts);
router.route("/create-new").post(newProduct);
router.route("/delete-product/:id").delete(deleteProduct);

module.exports = router;
