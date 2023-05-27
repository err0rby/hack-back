const { Router } = require("express");
const router = Router();
const { request } = require("../controllers/request.controller");

router.get("/request", request.getRequests);
router.post("/request", request.addRequest);
router.patch("/request/:id", request.updateRequest);
router.delete("/request/:id", request.deleteRequest);

module.exports = router;
