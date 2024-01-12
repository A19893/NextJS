import User from "@/models/user";
import { connectDB } from "@/config/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { username, email, password, confirmPassword } = await request.json();

  if (password !== confirmPassword) {
    return new NextResponse.json(
      JSON.stringify({ error: "Password do not match" }, { status: 400 })
    );
  }
  await connectDB();
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new NextResponse.json(
      JSON.stringify({ error: "User already exist" }, { status: 409 })
    );
  }
  const bcryptPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    email,
    password: bcryptPassword,
  });

  try {
    await newUser.save();
    return new NextResponse.json(JSON.stringify({ success: "User created" }, { status: 201 }));
  } catch (error) {
    return new NextResponse.json(JSON.stringify(error, { status: 500 }));
  }
};
