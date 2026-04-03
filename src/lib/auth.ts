import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const ADMIN_EMAILS = [
  "priyank@mytronlabs.com",
  "aditya@mytronlabs.com",
  "founders@mytronlabs.com",
];

const ADMIN_PASSWORD = "AdminTronLabs123@";
const USER_PASSWORD = "TronLabsForm123@";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = (credentials?.email as string)?.toLowerCase()?.trim();
        const password = credentials?.password as string;

        if (!email || !password) return null;
        if (!email.endsWith("@mytronlabs.com")) return null;

        const isAdmin = ADMIN_EMAILS.includes(email);
        const validPassword = isAdmin
          ? password === ADMIN_PASSWORD
          : password === USER_PASSWORD;

        if (!validPassword) return null;

        // Extract name from email
        const namePart = email.split("@")[0];
        const name = namePart
          .split(".")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ");

        return {
          id: email,
          email,
          name,
          role: isAdmin ? "admin" : "user",
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
        token.role = (user as { role?: string }).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        (session.user as { role?: string }).role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/portal/login",
    error: "/portal/login",
  },
  session: {
    strategy: "jwt",
  },
});
