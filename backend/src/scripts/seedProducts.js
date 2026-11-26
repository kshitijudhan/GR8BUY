import "dotenv/config";
import { connectDB } from "../config/db.js";
import mongoose from "mongoose";
import { Product } from "../models/product.model.js";

const seedProduct = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=0");
    if (!res.ok) throw new Error("There is some error while fetching");
    const data = await res.json();
    const products = data.products;
    const operations = products.map(({ id, ...product }) => ({
      updateOne: {
        filter: { sourceId: id },
        update: { $set: { ...product, sourceId: id } },
        upsert: true,
      },
    }));

    await connectDB();
    await Product.bulkWrite(operations);
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await mongoose.disconnect();
  }
};
seedProduct().catch(() => {
  process.exitCode = 1;
});
