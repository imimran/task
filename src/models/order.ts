import mongoose, { Schema, Document, ObjectId } from "mongoose";

interface IOrderModel {
  orderItems: ObjectId[];
  phone: string;
}
export interface IFDocument extends IOrderModel, Document {}

const OrderSchema = new Schema<IOrderModel>(
  {
    orderItems: [{
      type: Schema.Types.ObjectId,
      ref: "orderitems",
    }],
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("orders", OrderSchema);

export default Order;