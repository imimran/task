import express from "express";
// import MemberRouter from "./member/memberRouter";
import folderRouter from "./folderRoutes";
import orderRoutes from "./orderRoutes";

const router = express.Router();

router.use("/folder", folderRouter);
router.use("/order", orderRoutes);
router.all("*", (_req, res) => {
  res.status(404).send("Route not found");
});

export { router };
