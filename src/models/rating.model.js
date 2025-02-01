import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const ratingSchema = new Schema(
    {
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        review: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

ratingSchema.plugin(mongooseAggregatePaginate);

export const Rating = mongoose.model("Rating", ratingSchema);
