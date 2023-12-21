import mongoose,{Schema} from 'mongoose';

const enrollmentSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    monthYear: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["PENDING", "FAILED", "SUCCESS"],
      required: true,
    },
  },
);

export const Enrollment = mongoose.model("Enrollment", enrollmentSchema);


