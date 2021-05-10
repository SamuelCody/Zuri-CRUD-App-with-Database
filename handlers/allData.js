const Data = require("../models/Data");

//read a specific data
exports.allData = async (req, res, next) => {
  try {
    const data = await Data.find({});

    return res.status(200).json({
      message: "All data read successfully",
      data,
    });
  } catch (err) {
    return next({
      status: 400,
      message: "There is an error",
    });
  }
};
