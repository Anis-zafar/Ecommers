const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const Products = require("../models/products");
const { binary_to_base58 } = require("base58-js");

const addproduct = async (req, res) => {
  try {
    // console.log(req.file);
    if (!req.file) {
      res.status(200).send("No image provided");
    }
    const image = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer()
      .toString("base64");
    console.log(typeof image);

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
    return res.status(500).send({ error: error.message });
  }
};

const addimage = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("no image provided");
  }
  const image = await sharp(req.file.buffer)
    .resize({ width: 250, height: 250 })
    .jpeg()
    .toBuffer();
  const newImage = new Products(req.params.id, { _id: 1 });
  console.log(newImage);
  try {
    newImage.image = image;
    res.set("Content-Type", "image/jpeg");
    return res.status(201).send(`image successfully uploaded ${newImage}`);
  } catch (error) {
    return res.status(400).send("error uploading image");
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

module.exports = { addproduct, addimage, getproduct };
