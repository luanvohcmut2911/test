const exp = require("express");
const cors = require("cors")
const app = exp();
app.use(exp.json());

app.use(cors())

const myLog = require("./logger");
app.use(myLog);

const validateToken = require("./validateToken");

const userRouter = require("./routes/user.route");
const orderRouter = require("./routes/order.route");
app.use("/api/users", userRouter);
app.use("/api/orders", validateToken, orderRouter);

app.get("/", (req, res) => {
  res.send("web63 b2");
});
const databse = require("./database");
const db = new databse();

const port = 3001;
app.listen(port, () => {
  console.log(`Example app listenting on port ${port}`);
  db.connect().then((err, result) => {
    if (err) throw err;
    console.log("database is connected");
  });
});
