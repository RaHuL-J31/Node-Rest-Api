const express = require("express");
const router = express.Router();
const shopModel = require("../models/shopModel");

router.get("/", async (req, res) => {
  const shopData = await shopModel.find();
  res.json(shopData);
});

router.get("/:id", async (req, res) => {
  const shopData = await shopModel.findById(req.params.id);
  res.json(shopData);
});

router.patch("/:id", async (req, res) => {
  const shop = await shopModel.findById(req.params.id);
  shop.inStock = req.body.inStock;
  const saving = await shop.save();
  res.json(saving);
});

router.post("/", async (req, res) => {
  const shopData = new shopModel({
    product: req.body.product,
    catagory: req.body.catagory,
    inStock: req.body.inStock,
  });
  const saving = await shopData.save();

  res.json(saving);
});

router.delete("/:id", async (req, res) => {
  const shopData = await shopModel.remove({ _id: req.params.id });
  res.json(shopData);
});

module.exports = router;
