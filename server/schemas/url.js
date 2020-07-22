import { Schema } from "mongoose";

export const UrlSchema = new Schema({
  serializer: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});
