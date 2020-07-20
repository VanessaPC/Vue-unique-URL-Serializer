import { Schema } from "mongoose";

export const UrlSchema = new Schema({
  _id: {
    type: String,
  },
  serializer: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});
