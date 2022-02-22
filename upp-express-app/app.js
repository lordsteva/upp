const express = require("express");
var cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());
const paymentRoutes = require("./controllers/payment");
app.use("/payment", paymentRoutes);

const cvRoutes = require("./controllers/upload");
app.use("/cv", cvRoutes);

const statRoutes = require("./controllers/statistic");
app.use("/statistic", statRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
