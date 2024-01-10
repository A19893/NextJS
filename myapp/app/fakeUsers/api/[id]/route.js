import {users} from '../../../util/db';
import {NextResponse} from "next/server";
export function GET(_,res){
    const {id} = res.params
    const data = users;
    const user = data.filter((item)=> item.id===id)
    return NextResponse.json({user}, {status: 200})
}

export async function POST(req,res){
    const {id} = res.params;
    const {name,email,password}= await req.json();
    const {
        name:uName,
        email: uEmail,
        password: uPassword
    }= users.find((u)=>u.id === id);

    if(uName===name && uEmail===email && uPassword ===  password){
        return NextResponse.json({res:"Successfully logged in"})
    }
    else if(!name || !password || !email){
        return NextResponse.json({res:"Please provide credentials"})
    }
    else{
        return NextResponse.json({res:"Invalid credentials"})
    }
}