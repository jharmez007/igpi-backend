const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const dbConnect = require("./config/dbConnect");

const app = express();

dbConnect();

const PORT = 5100;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userRouter = require("./routes/user.routes");
const contactRouter = require("./routes/contact.routes");
const subscribeRouter = require("./routes/subscribe.routes");
const paymentRouter = require("./routes/payment.routes");

app.use("/api/user", userRouter);
app.use("/api/contact", contactRouter);
app.use("/api/subscribe", subscribeRouter);
app.use("/api/payment", paymentRouter);

app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});
