import path from "path";
import { NextFunction, Request, Response } from "express";
import fs from "fs";
import logger from "../logger";
import Folder from "../models/folder";

const storage = path.join(__dirname, "/../uploads");

logger.info(storage);

const createFolder = async (req: Request, res: Response) => {
  try {
    let { folderName, folderPath } = req.body;

    let queryPath = storage;

    if (folderName) {
      queryPath += "/" + (folderPath && folderPath !== "" ? folderPath + "/" : "") + folderName;
    }
    
    //create or check exist
    if (!fs.existsSync(queryPath)) {
      fs.mkdirSync(queryPath, {
        recursive: true,
      });
      const newFolder =  new Folder({
        folderName,
        folderPath: "/" + (folderPath && folderPath !== "" ? folderPath + "/" : "") + folderName
      })
      await newFolder.save()
      return res.json({ msg: "Folder Create Successfully" });
    } else {
      return res.json({ msg: "Folder already exist" });
    }
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ msg: error });
  }
};

const removeDir = (path: any) => {
   //check folder
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path);

    if (files.length > 0) {
      files.forEach( (filename) => {
        //check file or folder
        if (fs.statSync(path + "/" + filename).isDirectory()) {
          removeDir(path + "/" + filename);
        } else {
            //remove file
          fs.unlinkSync(path + "/" + filename);
        }
      });
      fs.rmdirSync(path);
    } else {
      fs.rmdirSync(path);
    }
  }
  else{
      throw Error("Folder Not Found")
  }
};

const removeFolder = async (req: Request, res: Response) => {
  try {
    let { dir } = req.body;
    const removeStorage = storage + "/" + dir;

    removeDir(removeStorage);
    return res
      .status(200)
      .json({ error: false, msg: "Folder delete Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, msg: "Folder not found" });
  }
};

export default {
  createFolder,
  removeFolder,
};
