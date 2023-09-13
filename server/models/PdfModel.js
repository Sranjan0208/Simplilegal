const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema({
  pdf: String,
});

const Pdf = mongoose.model("Pdf", pdfSchema);
module.exports = Pdf;
