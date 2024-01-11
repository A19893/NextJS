import { users } from "../../../util/db";
import { NextResponse } from "next/server";
import fs from "fs";
export function GET(_, res) {
  const { id } = res.params;
  const data = users;
  const user = data.filter((item) => item.id === id);
  return NextResponse.json({ user }, { status: 200 });
}

// export async function POST(req,res){
//     const {id} = res.params;
//     const {name,email,password}= await req.json();
//     const {
//         name:uName,
//         email: uEmail,
//         password: uPassword
//     }= users.find((u)=>u.id === id);

//     if(uName===name && uEmail===email && uPassword ===  password){
//         return NextResponse.json({res:"Successfully logged in"})
//     }
//     else if(!name || !password || !email){
//         return NextResponse.json({res:"Please provide credentials"})
//     }
//     else{
//         return NextResponse.json({res:"Invalid credentials"})
//     }
// }

export async function PUT(req, res) {
  const { id } = res.params;
  let { name, email, password } = await req.json();
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1)
    return NextResponse.json({ result: "User Not Found" }, { status: 404 });
  if (name) {
    users[userIndex].name = name;
  }
  if (email) {
    users[userIndex].email = email;
  }
  if (password) {
    users[userIndex].password = password;
  }
  const updatedUser = users;
  const UpdatedData = JSON.stringify(updatedUser);

  fs.writeFileSync(
    "./app/util/db.js",
    `export const users= ${UpdatedData}`,
    "utf-8"
  );
  return NextResponse.json({ result: "User Updated Successdfully!" });
}

export async function DELETE(req, res) {
  const { id } = res.params;
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1)
    return NextResponse.json({ result: "User Not Found" }, { status: 404 });
  users.splice(userIndex, 1);
  const updatedUser = users;
  const UpdatedData = JSON.stringify(updatedUser);

  fs.writeFileSync(
    "./app/util/db.js",
    `export const users= ${UpdatedData}`,
    "utf-8"
  );
  return NextResponse.json({ result: "User Deleted Successdfully!" });
}
