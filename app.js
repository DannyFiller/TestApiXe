const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const xeRoutes = require("./Routes/Xe");
dotenv.config();

// Kết nối CSDL
async function ConnectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB is connected");
  } catch (err) {
    console.log("Lỗi kết nối CSDL", err);
  }
}
ConnectDB();

app.use(bodyParser.json({ limit: "50mb" }));

// Cấu hình CORS
app.use(
  cors({
    origin: "*", // Đặt giá trị này thành tên miền của ứng dụng React Native hoặc '*' để cho phép từ mọi tên miền
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
    allowedHeaders: ["Content-Type", "Authorization"], // Các tiêu đề được phép
  })
);

app.use(morgan("common"));
app.use("/Xe", xeRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});