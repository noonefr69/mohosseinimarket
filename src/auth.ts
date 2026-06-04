import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        phone: {},
      },
      authorize(credentials) {
        // for now just return a fake user
        // later this hits your DB
        if (!credentials?.phone) return null;

        return {
          id: "1",
          phone: credentials.phone as string,
          name: "کاربر",
        };
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.phone = user.phone;
      }
      return token;
    },
    session({ session, token }) {
      session.user.phone = token.phone as string;
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
});
