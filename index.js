const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

// Register API
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  res.json({
    success: true,
    message: "User Registered Successfully",
  });
});

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  res.json({
    success: true,
    message: "Login Successful",
  });
});

// Forgot Password API
app.post("/forgot-password", (req, res) => {
  const { email } = req.body;

  res.json({
    success: true,
    message: "Reset link sent",
  });
});

app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});
