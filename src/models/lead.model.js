import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const leadSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^(?:\+91|0)?\d{10}$/.test(v);
        },
        message: (props) =>
          `${props.value} is not a valid 10-digit phone number!`,
      },
    },
    email: {
      type: String,
      required: false,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    pickupLocation: {
      type: String,
      required: true,
    },
    dropLocation: {
      type: String,
      required: true,
    },
    carType: {
      type: String,
      enum: ["Swift Dzire", "Traveller 16 Seater", "Maruti Ertiga"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

leadSchema.plugin(mongooseAggregatePaginate);

export const Lead = mongoose.model("Lead", leadSchema);
