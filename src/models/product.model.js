import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    detail: {
      type: String,
      required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        require: true,
    },
    category:{
        type: mongoose.Types.ObjectId,
        ref:"Category"
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", userSchema);