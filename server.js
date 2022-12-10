require("dotenv").config();
const productRoutes = require("../bitterroot-party-rentals-api/routes/productRoutes");
const requestRoutes = require("../bitterroot-party-rentals-api/routes/requestRoutes");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// -------- Connect to Database -------- //
async function connectDB() {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Found an error:", error);
  }
}
connectDB();

// -------- Controllers -------- //
app.get("/", (req, res) => {
  res.json({
    hello: "hi from server!",
  });
});
app.use("/api/product", productRoutes);
app.use("/api/request", requestRoutes);

// Select All
// const result = await coll.find().toArray();

// Insert/Post
// const result = await coll.insertMany(products);

// Edit/Update
// const result = await coll.updateOne({ id: 6 }, { $set: { price: 50 } });

// Delete
// const result = await coll.deleteOne({ id: 7 });

app.listen(5000, () => console.log("Listening on port 5000"));
