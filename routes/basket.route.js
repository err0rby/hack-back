const { Router } = require("express");
const router = Router();
const { bascket } = require("../controllers/bascket.controller");

router.get("/bascket", bascket.getBascket);
router.post("/bascket", bascket.addBascket);
router.patch("/bascket/:id", bascket.updateBascket);
router.patch("/bascket/addProduct/:id", bascket.addProductToBascket);
router.delete("/bascket/oneProd/:id", bascket.deleteOneProdBascket);

module.exports = router;
