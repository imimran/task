import mongoose, { Schema, Document } from "mongoose";

interface IFolderModel {
  folderName: string;
  folderPath?: string;
  folderType: string;
  parent: string;
  child?: string[];
}
export interface IFDocument extends IFolderModel, Document {}

const FolderSchema = new Schema<IFolderModel>(
  {
    folderName: {
      type: String,
      required: true,
    },
    folderPath: {
      type: String,
      required: false,
    },
    folderType: {
      type: String,
      required: true,
    },
    parent: {
      type: String,
      required: true,
    },
    child: {
      type: [String],
      required: false,
    },

  },

  { timestamps: true }
);

const Folder = mongoose.model("folders", FolderSchema);

export default Folder;
