const Data = require("../models/Data");

//read a specific data
exports.readData = async (req, res, next) => {
  try {
    const data = await Data.findById(req.params.dataId);
    if (!data) {
      return next({
        status: 400,
        message: "Data doesn't exist",
      });
    }

    return res.status(200).json({
      message: "Data read successfully",
      data,
    });
  } catch (err) {
    return next({
      status: 400,
      message: "There is an error",
    });
  }
};
