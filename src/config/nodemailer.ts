import nodemailer from "nodemailer";

const email = process.env.EMAIL;

export const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
