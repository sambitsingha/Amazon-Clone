const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected to the database"))
  .catch((err) => console.log(err));

//Schema
const userSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  number: {
    type: Number,
    unique: true,
  },
  password: String,

  city: String,
  pincode: {
    type: Number,
  },
});

//modal
const userModal = mongoose.model("user", userSchema);

//api
app.get("/", (req, res) => {
  res.send("Server is running");
});

//api signup
app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { name, email, number, password, city, pincode } = req.body;

  try {
    const existingUser = await userModal.findOne({
      email: email,
      number: number,
    });
    if (existingUser) {
      res.send({
        message: "Email or Mobile number already exists",
        alert: false,
      });
    } else {
      const newUser = new userModal({
        name,
        email,
        number,
        password,
        city,
        pincode,
      });
      await newUser.save();

      res.send({ message: "Successfully signed up", alert: true });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

//login api
app.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    const existingUser = await userModal.findOne({
      email: email,
      password: password,
    });
    if (existingUser) {
      const DataSend = {
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        number: existingUser.number,
        city: existingUser.city,
        pincode: existingUser.pincode,
      };
      console.log(DataSend);
      res.send({
        message: "Successfully logged in",
        alert: true,
        data: DataSend,
      });
    } else {
      res.send({
        message: "Email is not available, Please signup",
        alert: false,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
app.listen(PORT, () => console.log("Server is running at port : " + PORT));