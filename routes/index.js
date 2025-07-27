const express = require("express");
const router = express.Router();
const taskApi = require("./task.api");
const userApi = require("./user.api");

router.use("/tasks", taskApi); // /tasks로 요청이 오면 taskApi로 넘겨주는 것
router.use("/user", userApi);

module.exports = router;
