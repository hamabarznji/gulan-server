const router = require("express").Router();
const routes = require("../../routes.json");
const User = require("../controllers/User");
const verifyAuth = require("../../middleware/verifyAuth");

router.post(routes.user.login, User.login);


module.exports = router;
 