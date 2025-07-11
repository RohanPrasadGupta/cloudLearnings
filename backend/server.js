const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const http = require("http");
const cloudinary = require("cloudinary").v2;

dotenv.config({ path: "./config.env" });

const user = process.env.USER_NAME;
const password = process.env.PASSWORD;

const MONGODB_URI = `mongodb+srv://${user}:${password}@cluster0.mpuz2fw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// set CLOUDINARY_URL=cloudinary://741484585886249:AMUWRp0f8tuun6shk0qMmQh62l4@cloudimagev1
const CLOUDINARY_URL = `cloudinary://${process.env.api_key}:${process.env.api_secret}@${process.env.cloud_name}`;
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
  secure: true,
});

// Log the configuration
// console.log(cloudinary.config());

const port = process.env.PORT || 5000;

// Create HTTP server
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
