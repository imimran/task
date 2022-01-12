import mongoose, { Schema, Document } from "mongoose";

interface IOrderItemsModel {
    products: string;
    quantity: number;
}
export interface IFDocument extends IOrderItemsModel, Document {}

const OrderItemsSchema = new Schema<IOrderItemsModel>(
  {
    products: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

const OrderItems = mongoose.model("orderitems", OrderItemsSchema);

export default OrderItems;