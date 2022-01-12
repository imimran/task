import { Request, Response } from "express";
import Order from "../models/order";
import OrderItems from "../models/orderItems";

const getOrder = async (req: Request, res: Response) => {
  const orderId = req.params.orderId;
  //find order
  const foundOrder = await Order.findOne({ _id: orderId }).populate(
    "orderItems"
  );
  if (!foundOrder) {
    return res.status(404).json({ message: "Order Not Found" });
  }

  return res.status(200).json(foundOrder);
};

const createOrder = async (req: Request, res: Response) => {
  const { phone, orderItems } = req.body;
  console.log("body", req.body);
  let itemArr: any[];
  itemArr = [];
  //  orderItems.map(async (item: { products: any; quantity: any }) => {
  //   const newOrdeItem = new OrderItems({
  //     products: item.products,
  //     quantity: item.quantity,
  //   });
  //   const items = await newOrdeItem.save();

  //   itemArr.push(items._id);
  //   console.log("arr", itemArr);
  // });
  for (let i = 0; i < orderItems.length; i++) {
    let item = orderItems[i];
    const newOrdeItem = new OrderItems({
      products: item.products,
      quantity: item.quantity,
    });
    const items = await newOrdeItem.save();

    itemArr.push(items._id);
  }

  console.log("arrs", itemArr);

  const newOrder = new Order({
    orderItems: itemArr,
    phone,
  });
  const order = await newOrder.save();
  return res.json(order);
};

export default {
  getOrder,
  createOrder,
};
