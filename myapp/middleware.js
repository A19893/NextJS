import { NextResponse } from "next/server"

export function middleware(request){
console.log("middleware ran")
return NextResponse.json({success:"Successfully ran"})
}

export const config= {
    matcher: ['/api/users/:path*']
}