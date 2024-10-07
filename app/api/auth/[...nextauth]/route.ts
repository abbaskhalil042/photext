import Google from "next-auth/providers/google";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
// import { prisma } from "@/prisma"
const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session }) {
      const sessionUser = await prisma.user.findUnique({
        where: {
          email: session.user?.email as string,
        },
      });

      if (sessionUser) {
        session.user = {
          ...session.user,
        };
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
