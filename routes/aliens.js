const express = require("express");
const { findOne, remove } = require("../models/alienModel");
const router = express.Router();
const Alien = require("../models/alienModel");

router.get("/", async (req, res) => {
  try {
    const alienData = await Alien.find();
    res.json(alienData);
  } catch (error) {
    res.send("Error from getting data from DB");
  }
});

router.get("/:id", async (req, res) => {
  const findOneId = await Alien.findById(req.params.id);
  res.json(findOneId);
});

router.delete("/:id", async (req, res) => {
  const findOneId = await Alien.remove({ _id: req.params.id });
  res.json(findOneId);
});

router.patch("/:id", async (req, res) => {
  const getAlien = await Alien.findById(req.params.id);
  getAlien.sub = req.body.sub;
  const saving = await getAlien.save();
  res.json(saving);
});
router.post("/", async (req, res) => {
  try {
    console.log(res.body);
    const alienData = new Alien({
      name: req.body.name,
      tech: req.body.tech,
      sub: req.body.sub,
    });
    const saving = await alienData.save();
    res.json(saving);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
