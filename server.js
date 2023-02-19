const express = require("express");
const userRouter = require("./routes/userRouter");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from / route" });
});

app.use("/users", userRouter);

app.listen(3000, console.log("server is started on port:", 3000));
