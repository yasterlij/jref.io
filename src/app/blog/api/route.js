import { Flow_Rounded } from "next/font/google";
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({hello: "World"})
}

export async function POST() {
    //Form Data
    //API Json post data
    return NextResponse.json({hello: "World"})
}