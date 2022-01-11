import express from "express";
import folderController from "../controllers/folderController";

const router = express.Router();

router.post("/create", folderController.createFolder);
router.delete("/remove", folderController.removeFolder);

export default router;
