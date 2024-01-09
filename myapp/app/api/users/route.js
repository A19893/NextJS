import {NextResponse} from "next/server"
import {users} from '@/app/util/db'
export function GET(){
    return NextResponse.json({users})
}