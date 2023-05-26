const { Router } = require("express");
const router = Router();
const { users } = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/users", users.getUsers);
router.get("/oneUser", users.getOneUser);
router.post("/login", users.login);
router.post("/auth", users.auth);;

module.exports = router;