import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
    },
    otp: {
      code: String,
      expiresAt: Date,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    ecoDeliveriesCount: {
      type: Number,
      default: 0,
    },
    rewardCoupons: [
      {
        code: String,
        discount: Number,
        isRedeemed: { type: Boolean, default: false },
      },     
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User",userSchema);

export default User;