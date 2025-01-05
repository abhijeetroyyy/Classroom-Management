const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connectToDb = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();
connectToDb();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/classes", require("./routes/class.routes"));
app.use("/api/students", require("./routes/student.routes"));
app.use("/api/enrollments", require("./routes/enrollment.routes"));
app.use(errorHandler);

const startServer = () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();