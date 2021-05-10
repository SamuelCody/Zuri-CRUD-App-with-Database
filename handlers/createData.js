const Data = require("../models/Data");

//create the data
exports.createData = async (req, res, next) => {
  try {
    const { name, email, country } = req.body;
    if (!name || !email || !country) {
      return next({
        status: 400,
        message:
          "The data you are required to create should contain name, email and country",
      });
    }

    //if we are sending complete payload data
    const data = await Data.create(req.body);
    return res.status(200).json({
      message: "Data created successfully",
      data,
    });
  } catch (err) {
    return next({
      status: 400,
      message: "There is an error",
    });
  }
};
