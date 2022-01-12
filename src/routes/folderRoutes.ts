import express from "express";
import folderController from "../controllers/folderController";

const router = express.Router();

router.post("/create", folderController.createFolder);
router.post("/remove", folderController.removeFolder);
router.get("/all", folderController.getAllFolder);

export default router;
