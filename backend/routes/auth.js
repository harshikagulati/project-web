import bcrypt from "bcrypt";
import express from "express";
import User from "../models/user.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/verifyToken.js";
import contact from "../models/contact.js";
import transporter from "../config/mailer.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = process.env.BASE_URL || "https://houseofmedia.onrender.com";

const imageUrls = files.map(
  (file) => `${baseUrl}/uploads/${userId}/${file}`
);

router.post("/login", async (req, res) => {
    try {
        const { id, password } = req.body; // ✅ FIX

        const user = await User.findOne({ id });

        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            message: "Login successful",
            userId: user.id,
            token: token
        });

    } catch (error) {
        console.error("LOGIN ERROR:", error); // 🔥 VERY IMPORTANT
        res.status(500).json({ error: "Server error" });
    }
});

router.get("/images", verifyToken, async (req, res) => {
    try {
        const userId = req.user.userId

        const userFolder = path.join(__dirname, "..", "uploads", userId);

        console.log("User folder:", userFolder);

        if (!fs.existsSync(userFolder)) {
            return res.status(404).json({ error: "No folder found for this user" });
        }

        const files = fs
            .readdirSync(userFolder)
            .filter((file) => {
                const filePath = path.join(userFolder, file);
                console.log("userFolder:", userFolder);
                return fs.statSync(filePath).isFile();
            });

        console.log("Files:", files);

       const imageUrls = files.map(
        (file) => `${baseUrl}/uploads/${userId}/${file}`
      );

        res.json({ images: imageUrls });
    } catch (error) {
        res.status(500).json({ error: "Failed to load images" });
    }
});


router.post("/contact", async (req, res) => {
    try {
        const { fname, lname, email, phno, service, message } = req.body;

        if (!fname || !email) {
            return res.status(400).json({ message: "Required fields missing" });
        }

        console.log("Incoming data:", req.body);

        const newContact = new contact({ fname, lname, email, phno, service, message });
        await newContact.save();

        console.log("EMAIL_USER:", process.env.EMAIL_USER);
        console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

        const info1 = await transporter.sendMail({
            from: `"House of Media" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: "New Contact Form Enquiry",
            text: `
    You received a new enquiry:

    First Name: ${fname}
    Last Name: ${lname}
    Email: ${email}
    Phone: ${phno}
    Service: ${service}
    Message: ${message}
  `,
        });

        const info2 = await transporter.sendMail({
            from: `"House of Media" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "We received your enquiry",
            text: `Hi ${fname}, we’ll get back to you shortly!`,
        });

        console.log("Mail sent:", info1.response);
        console.log("Mail sent:", info2.response);

        res.status(200).json({ message: "Enquiry sent successfully" });

    } catch (error) {
        console.error("FULL ERROR:", error);
        console.error("ERROR MESSAGE:", error.message);
        res.status(500).json({ message: "Error sending enquiry" });

    }
});

import crypto from "crypto";

router.post("/forgot-password", async (req, res) => {
  try {
    const { id } = req.body;

    const user = await User.findOne({ id });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const token = crypto.randomBytes(32).toString("hex");

    user.resetToken = token;
    user.resetTokenExpiry = Date.now() + 1000 * 60 * 15;

    await user.save();

    const resetLink = `https://houseofmedia.onrender.com/reset-password/${token}`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email, 
      subject: "Password Reset",
      text: `Click here to reset your password: ${resetLink}`,
    });

    res.json({ message: "Reset link sent to your email" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});


router.post("/reset-password/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;

    if (!newPassword || newPassword.length < 8) {
      return res.status(400).json({
        error: "Password must be at least 8 characters",
      });
    }

    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        error: "Invalid or expired token",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;

    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    await user.save();

    res.json({ message: "Password reset successful" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
