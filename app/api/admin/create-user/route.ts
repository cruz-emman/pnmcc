import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        
        await auth.api.createUser({
            body: {
                email: body.email,
                password: "Changeme123!",
                name: body.email,
                role: "user"
            }
        })


        

        return NextResponse.json({ message: "User Created" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}