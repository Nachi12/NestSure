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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Booking",
  bookingSchema
);