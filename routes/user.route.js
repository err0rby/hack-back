const { Router } = require("express");
const router = Router();
const { users } = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/users", users.getUsers);
router.get("/oneUser", users.getOneUser);
router.get("/authUser/:id", users.getAuthUser);
router.post("/login", users.login);
router.patch("/update/user/:id", users.updateUser)
router.patch("/following", users.addFollower);
router.patch("/addProduct/:id", users.addProductToBascket);
router.post("/auth", users.auth);

module.exports = router;
