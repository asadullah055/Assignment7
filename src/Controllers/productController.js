exports.create = async (req, res) => {
  try {
    res
      .status(200)
      .json({ status: "success", data: "Product Controller Create Successfully" });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};
exports.read = async (req, res) => {
  try {
    res
      .status(200)
      .json({ status: "success", data: "Product Controller Read Successfully" });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};
exports.delete = async (req, res) => {
  try {
    res
      .status(200)
      .json({ status: "success", data: "Product Controller Delete Successfully" });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};
exports.update = async (req, res) => {
  try {
    res
      .status(200)
      .json({ status: "success", data: "Product Controller Update  Successfully" });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};
