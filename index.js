const express = require("express");
const cors = require("cors");

const app = express();

// CORS Fix
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

// Register API
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  console.log("Register:", email, password);

  res.json({
    success: true,
    message: "User Registered Successfully",
  });
});

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Login:", email, password);

  res.json({
    success: true,
    message: "Login Successful",
  });
});

// Forgot Password API
app.post("/forgot-password", (req, res) => {
  const { email } = req.body;

  console.log("Forgot Password:", email);

  res.json({
    success: true,
    message: "Password Reset Link Sent",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;