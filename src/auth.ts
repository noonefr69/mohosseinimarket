import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import dbConnect from "@/lib/db";
import { Otp } from "@/models/otp";
import { User } from "@/models/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        phone: {},
        otp: {},
      },
      async authorize(credentials) {
        if (!credentials?.phone || !credentials?.otp) return null;

        await dbConnect();

        // Find a verified OTP matching the phone and code
        const otpRecord = await Otp.findOne({
          phone: credentials.phone,
          code: credentials.otp,
          verified: true,
        });

        if (!otpRecord) return null;

        // Optional: remove the used OTP
        await Otp.deleteMany({ phone: credentials.phone, verified: true });

        // Find or create the user
        let user = await User.findOne({ phone: credentials.phone });
        if (!user) {
          user = await User.create({ phone: credentials.phone });
        }

        // Return user object that will be passed to the JWT callback
        return {
          id: user._id.toString(),
          phone: user.phone,
          name:
            `${user.first_name || ""} ${user.last_name || ""}`.trim() ||
            "کاربر",
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
        token.id = user.id; // store user id
        token.phone = user.phone;
        token.name = user.name;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      session.user.phone = token.phone as string;
      session.user.name = token.name as string;
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
});
