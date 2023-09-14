const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const multer = require("multer");

const Img = require("./models/ImgModel");
const Pdf = require("./models/PdfModel");

require("dotenv").config();

const app = express();

const DATABASE = process.env.DATABASE;
const PORT = process.env.PORT || 8000;

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:8000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  Pdf.create({ pdf: req.file.filename })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.get("/getpdf", (req, res) => {
  Pdf.find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.post("/imgupload", upload.single("file"), (req, res) => {
  console.log(req.file);
  Img.create({ imageURL: req.file.filename })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.get("/getimage", (req, res) => {
  Img.find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

// Form Data

const FormEntry = mongoose.model("FormEntry", {
  name: String,
  phoneNumber: String,
  dob: String,
  address: String,
  problem: String,
  caseAgainst: String,
  additionalInfo: String,
});

app.post("/form", async (req, res) => {
  try {
    const formEntry = new FormEntry(req.body);
    await formEntry.save();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.use(cookieParser());

app.use("/", require("./routes/auth.routes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
