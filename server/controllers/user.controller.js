import {User} from "../models/user.model.js";
import CompletePayment from '../paymentfunction.js'
import { Enrollment } from "../models/enrollment.model.js";
import PaymentStatus from "../models/payment.enum.js";

const enrollUser = async (req, res) => {
  try {
    const { name, email, age, batch, monthYear } = req.body;
    if (!name || !email || !age || !batch || !monthYear) {
      return res.status(400).send("Please provide all the details");
    }

    if (age < 18 || age > 65) {
      return res.status(400).json({ error: "Age must be between 18 and 65" });
    }

    let user = await User.findOne({ email: email });
    if (!user) {
      user = new User({
        name,
        email,
        age,
      });
      await user.save();
    }

    const existingEnrollment = await Enrollment.findOne({
      monthYear,
      email,
      paymentStatus: PaymentStatus.SUCCESS
    });

    if (existingEnrollment) {
      return res
        .status(409)
        .json({ error: "Payment for this month already exists" });

    }
    
    const paymentStatus= PaymentStatus.SUCCESS
    const paymentResponse = CompletePayment();
    let enrollment = new Enrollment({
        email,
        monthYear,
        batch,
        paymentStatus
    })
      await enrollment.save();
    return res
      .status(200)
      .json({ message: "Enrollment successful", paymentResponse });

  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export { enrollUser };
