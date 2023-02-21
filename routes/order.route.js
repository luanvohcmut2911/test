const exp = require("express");
const router = exp.Router();
const controller = require('../controllers/order.controller')

//GET api
router.get("/", controller.getAll);
//GET byid
router.get("/:id", controller.getById);
//GET order detail by id
router.get("/detail/:id", controller.getOrderDetailById);
//Aggregation
router.get("/aggregate", controller.aggregate);

module.exports = router;
