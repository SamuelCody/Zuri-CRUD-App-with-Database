const Data = require("../models/Data");

//delete a specific data
exports.deleteData = async (req, res, next) => {
  try {
    const data = await Data.findById(req.params.dataId);
    if (!data) {
      return next({
        status: 400,
        message: "Data doesn't exist",
      });
    }

    await data.remove();

    return res.status(200).json({
      message: "Data deleted successfully",
    });
  } catch (err) {
    return next({
      status: 400,
      message: "There is an error",
    });
  }
};
