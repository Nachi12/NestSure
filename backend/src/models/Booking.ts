import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    issue: {
      type: String,
      required: true,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    services: [
      {
        name: String,
        category: String,
        price: Number,
        duration: String,
      },
    ],

    razorpayOrderId: {
      type: String,
      required: true,
    },

    razorpayPaymentId: {
      type: String,
      default: null,
    },

    razorpaySignature: {
      type: String,
      default: null,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Booking",
  bookingSchema
);