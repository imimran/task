import express from "express";
import orderControllers from "../controllers/orderControllers";

const router = express.Router();

router.post("/create", orderControllers.createOrder);
router.get("/:orderId", orderControllers.getOrder);

export default router;