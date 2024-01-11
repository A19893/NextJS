import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";
export function GET() {
  const data = users;
  return NextResponse.json({ data }, { status: 200 });
}

export async function POST(req, res) {
  const { id, name, email, password, age } = await req.json();
  if (!id || !name || !password || !email) {
    return NextResponse.json({ res: "Please provide credentials" });
  } else {
    users.push({ id, name, email, password, age });
    const updatedUser = users;
    const UpdatedData = JSON.stringify(updatedUser);

    fs.writeFileSync(
      "./app/util/db.js",
      `export const users= ${UpdatedData}`,
      "utf-8"
    );

    return NextResponse.json({message:"User Created Successfully!!",ok: true})
  }
}

// export async function PUT(req,res) {
//   let {id, name,email,password}= await req.json();
//   const userIndex= users.findIndex((user)=>user.id===id);
//   if(userIndex === -1) return NextResponse.json({result:"User Not Found"},{status:404})
//   if(name){
//     users[userIndex].name=name
//   }
//   if(email){
//     users[userIndex].email=email
//   }
//   if(password){
//     users[userIndex].password=password
//   }
//   const updatedUser = users;
//   const UpdatedData = JSON.stringify(updatedUser);

//     fs.writeFileSync(
//       "./app/util/db.js",
//       `export const users= ${UpdatedData}`,
//       "utf-8"
//     );
//   return NextResponse.json({result:"User Updated Successdfully!"})
// }
