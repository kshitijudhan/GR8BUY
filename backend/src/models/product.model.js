import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  reviewerName: {
    type: String,
    required: true,
    trim: true,
  },
  reviewerEmail: {
    type: String,
    required: true,
    trim: true,
    select: false,
  },
});

const dimensionsSchema = new Schema(
  {
    width: {
      type: Number,
      min: 0,
    },
    height: {
      type: Number,
      min: 0,
    },
    depth: {
      type: Number,
      min: 0,
    },
  },
  { _id: false },
);

const metaSchema = new Schema(
  {
    barcode: {
      type: String,
      trim: true,
    },
    qrCode: {
      type: String,
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const productSchema = new Schema(
  {
    sourceId: {
      type: Number,
      required: true,
      unique: true,
      sparse: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discountPercentage: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
    brand: {
      type: String,
      required: true,
    },
    sku: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      trim: true,
    },
    dimensions: {
      type: dimensionsSchema,
    },
    warrantyInformation: {
      type: String,
      trim: true,
    },
    shippingInformation: {
      type: String,
      trim: true,
    },
    availabilityStatus: {
      type: String,
      trim: true,
    },
    reviews: {
      type: [reviewSchema],
      default: [],
    },
    returnPolicy: {
      type: String,
      required: true,
    },
    minimumOrderQuantity: {
      type: Number,
      default: 1,
      min: 1,
    },
    meta: {
      type: metaSchema,
    },
    thumbnail: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

export const Product = mongoose.model("Product", productSchema);
