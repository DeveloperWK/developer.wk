import connectDB from "@/dbConnect";
import Users from "@/model/User";
import bcrypt from "bcrypt";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        await connectDB();
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user = await Users.findOne({ email });
        if (!user) {
          throw new Error("No user found");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }
        return user;
      },
    }),
  ],
  callbacks: {
    signIn: async ({ user }) => {
      await connectDB();
      if (user) {
        return true;
      }
      return false;
    },

    jwt: async ({ token }) => {
      await connectDB();
      const userByEmail = await Users.findOne({ email: token.email });
      token.user = userByEmail;
      return token;
    },
    session: async ({ session, token }) => {
      await connectDB();
      session.user = token.user as {
        password?: string | null;
        email?: string | null;
        role?: string | null;
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in",
  },
};
export default authOptions;
