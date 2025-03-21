import { Schema, model, models } from "mongoose";
import { IBlog } from "../../Types/types";

// Define a schema for the "User" model

const blogSchema = new Schema<IBlog>({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 100
  },
  content: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 5000
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  timestamps: true
});

// Create the "Blog" model using the schema
const BlogModel = models.Blog || model<IBlog>("Blog", blogSchema);

export default BlogModel;