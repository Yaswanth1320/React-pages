const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const postRoute = require("./routes/postRoute");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("connected to database");
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(6000, () => {
  console.log("server started at port 6000");
});
