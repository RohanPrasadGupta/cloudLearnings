const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const formRoutes = require("./routes/upload");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

const allowedOrigins = ["http://localhost:3001", "http://localhost:3000"];

const corsOptions = {
  origin: allowedOrigins,
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
  maxAge: 86400000,
};

cloudinary.config({
  secure: true,
});

console.log(cloudinary.config());

app.use(cors(corsOptions));
app.use("/api", formRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;
