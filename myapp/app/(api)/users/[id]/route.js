import {NextResponse} from "next/server"

export function GET(request, response){
    const {id}= response.params
    return NextResponse.json({success: `Hi This message was successfully delivered to user ${id}`})
}