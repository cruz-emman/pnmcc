import { user } from "@/db/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { NextResponse, NextRequest } from "next/server";
import * as XLSX from "xlsx";


export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const workbook = XLSX.read(buffer, { type: 'buffer' });

        // Get the first sheet
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);


        const rows = data.map((row: any) => ({
            email: row.email,
            password: "Changeme123!",
            name: row.email,
        }))



        for (let i = 0; i < rows.length; i++) {
            const existingUser = await db
                .select()
                .from(user)
                .where(eq(user.email, rows[i].email))
                .limit(1)

            if (existingUser.length > 0) {
                continue; // Skip existing users
            }



            await auth.api.createUser({
                body: {
                    email: rows[i].email,
                    password: rows[i].password,
                    name: rows[i].name,
                    role: "user"
                }
            })
        }



        return NextResponse.json({ message: "File processed successfully", data }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}