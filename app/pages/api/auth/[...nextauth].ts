import NextAuth, { NextAuthOptions } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import { TwitterLegacyProfile } from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        domain: `.${process.env.ROOT_DOMAIN}`,
        secure: true,
      },
    },
  },
  providers: [

    
  ],
  
  callbacks: {

  },
  // debug: process.env.NODE_ENV !== "production"
}

export default NextAuth(authOptions);
