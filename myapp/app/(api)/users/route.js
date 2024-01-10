import {NextResponse} from "next/server"
import {users} from '@/app/util/db'
export function GET(){
    return NextResponse.json({users})
} 

export async function POST(req,res){
    let {email,age, name} = await req.json();
    console.log(email, age, name);
    return NextResponse.json({res: "Data send successfully",ok:true},{status:201})
}