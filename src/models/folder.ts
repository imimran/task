import mongoose, { Schema, Document } from "mongoose";

interface IFolderModel {
  folderName: string;
  folderPath?: string;
  folderType: string;
  node: string;
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
    node: {
      type: String,
      required: true,
    },

  },

  { timestamps: true }
);

const Folder = mongoose.model("folders", FolderSchema);

export default Folder;
