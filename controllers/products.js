const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const Products = require("../models/products");
const { binary_to_base58 } = require("base58-js");
const { findByIdAndUpdate } = require("../models/products");

const addproduct = async (req, res) => {
  try {
    // console.log(req.file);
    if (!req.file) {
      image = "no image";
    } else {
      var data = req.file.buffer;
      var image = await sharp(data)
        .resize({ width: 250, height: 250 })
        .png()
        .toBuffer()
        .toString("base64");
      // console.log(typeof image);
    }
    const product = new Products({
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
      image,
    });
    // console.log(data);
    await product.save();
    return res.send("Product created successfully").status(201);
  } catch (error) {
    // console.log(error);
    return res.status(400).send({ error: error.message });
  }
};

const addimage = async (req, res) => {
  try {
    // console.log(req);

    if (!req.file) {
      return res.status(400).send({ message: "provide image" });
    } else {
      var data = req.file.buffer;
      var image = sharp(data)
        .resize({ width: 250, height: 250 })
        .png()
        .toBuffer()
        .toString("base64");
    }
    await Products.findByIdAndUpdate(req.body.id, { $set: { image: image } });
    return res.status(201).send("image added");
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

const getproduct = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(404).send("in valid id");
  }
  const data = await Products.findById({ _id: id });
  // res.set("Content-Type", "image/jpeg");
  // console.log(data.image.toString());
  // res.send(data.image)
  // console.log(data);
  return res.send(data);
};

const products = async (req, res) => {
  const data = await Products.find();
  res.status(200).send(data);
};
module.exports = { addproduct, addimage, getproduct, products };
