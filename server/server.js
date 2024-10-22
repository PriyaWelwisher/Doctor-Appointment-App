const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRouters = require("./routes/userRoutes"); // Ensure you're correctly importing this
const cors = require('cors');

// dotenv config
dotenv.config();

// MongoDB connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// routes
app.use("/api/v1/user", userRouters);  // Use userRouters directly

// PORT
const port = process.env.PORT || 8080;

// Listen to port
app.listen(port, () => {
    console.log(
        `Server Running in ${process.env.NODE_MODE} mode on port ${port}`.bgCyan.bgYellow
    );
});
