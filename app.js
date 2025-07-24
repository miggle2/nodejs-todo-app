const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index"); // 우리가 만든 router를 연결 하는 것
const app = express();
app.use(bodyParser.json());
app.use("/api", indexRouter); // 프론트엔드에서 호출하는 api다 라고 명시한 것

const mongoURI = `mongodb://localhost:27017/todo-demo`;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

app.listen(5000, () => {
  console.log("server on 5000");
});
