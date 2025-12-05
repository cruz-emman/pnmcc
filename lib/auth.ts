import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import * as schema from "@/db/schema";
import { admin } from "better-auth/plugins"
import { ServerClient } from "postmark";

function getPostmarkClient() {
  return new ServerClient(process.env.POSTMARK_API!);
}

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema
  }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      const client = getPostmarkClient();

      await client.sendEmail({
        From: "support@tcet.tualearning.com",
        To: user.email as string,
        Subject: "Reset your password",
        TextBody: `Click the link to reset your password: ${url}`,
      });
    },
  },
  plugins: [
    admin()
  ]
});
