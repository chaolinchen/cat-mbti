import mongoose, { Document, Schema } from 'mongoose';

export interface ICourse extends Document {
  title: string;
  description: string;
  image: string;
  platform: string;
  rating: number;
  price: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const CourseSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  platform: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  price: { type: String, required: true },
  tags: [{ type: String }],
}, {
  timestamps: true
});

export default mongoose.model<ICourse>('Course', CourseSchema); 