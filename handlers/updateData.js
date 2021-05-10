const Data = require("../models/Data");

//update a specific data
exports.updateData = async (req, res, next) => {
  try {
    const data = await Data.findById(req.params.dataId);
    if (!data) {
      return next({
        status: 400,
        message: "Data doesn't exist",
      });
    }

    const { name, email, country } = req.body;
    if (!name || !email || !country) {
      return next({
        status: 400,
        message:
          "The data you are required to update should contain name, email and country",
      });
    }

    const updatedData = await Data.findOneAndUpdate(
      { _id: req.params.dataId },
      { $set: req.body },
      { new: true, useFindAndModify: false }
    );

    return res.status(200).json({
      message: "Data updated successfully",
      data: updatedData,
    });
  } catch (err) {
    return next({
      status: 400,
      message: "There is an error",
    });
  }
};
