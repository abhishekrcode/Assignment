const axios = require("axios");

const ProductModel = require("../model/productsModel");

// @desc    Fetch and seed all products
// @route   GET /api/initialize-database
// @access  Public
const initializeDatabase = async (req, res) => {
  try {
    const response = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );
    
    const seedData = response.data;
    console.log(response);

    await ProductModel.insertMany(seedData);

    res.json({ message: "Database initialized with seed data" });
  } catch (error) {
    console.log(response.data,"response");
    res.status(500).json({ error: "Database initialization failed" });
  }
};

module.exports = {
  initializeDatabase,
};
