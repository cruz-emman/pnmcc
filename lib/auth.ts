import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import * as schema from "@/db/schema"; // Import your schema
import { admin } from "better-auth/plugins"
var postmark = require("postmark");

var client = new postmark.ServerClient(process.env.POSTMARK_API as string);

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema: schema
    }),
    emailAndPassword: {
        enabled: true,
        sendResetPassword: async ({ user, url }) => {
      await client.sendEmail({
        "From": "support@tcet.tualearning.com",
        "To": user.email as String,
        "Subject": "Reset your password",
        "TextBody": `Click the link to reset your password: ${url}`,
      })
    },
    },
    plugins: [
        admin()
    ]
});