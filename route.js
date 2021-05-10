const express = require("express");
const router = express.Router();
const { createData } = require("./handlers/createData");
const { readData } = require("./handlers/readData");
const { updateData } = require("./handlers/updateData");
const { deleteData } = require("./handlers/deleteData");
const { allData } = require("./handlers/allData");

//route to create the data
router.post("/create", createData);

//route to read a specific data
router.get("/read/:dataId", readData);

//route to update specific data
router.put("/update/:dataId", updateData);

//route to delete specific data
router.delete("/delete/:dataId", deleteData);

//route to get all data
router.get("/all", allData);

module.exports = router;
