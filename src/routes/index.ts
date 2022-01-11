import express from "express";
// import MemberRouter from "./member/memberRouter";
import folderRouter from './folderRoutes'

const router = express.Router();


router.use("/folder", folderRouter);
router.all("*", (_req, res) => {
  res.status(404).send("Route not found");
});

export { router };
