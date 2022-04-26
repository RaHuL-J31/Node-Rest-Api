const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  catagory: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.model("ShopDetail", shopSchema);
