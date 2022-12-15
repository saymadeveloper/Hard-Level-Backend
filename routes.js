
const routes = require("./routes/index");
const router = require("express").Router();

module.exports = (app) => {
  app.use("/user", router.use(routes.user));
  app.get("/welcome", (req, res) => {
    return res.json({
      code: 200,
      message: "Congratulations! Your Marvel backend server is ready!",
    });
  });
};