import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const ADMIN_EMAILS = [
  "priyank@mytronlabs.com",
  "aditya@mytronlabs.com",
  "founders@mytronlabs.com",
];

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "select_account",
          hd: "mytronlabs.com",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      // Only allow @mytronlabs.com emails
      return profile?.email?.endsWith("@mytronlabs.com") ?? false;
    },
    async jwt({ token, profile }) {
      if (profile) {
        token.email = profile.email;
        token.name = profile.name;
        token.role = ADMIN_EMAILS.includes(profile.email ?? "")
          ? "admin"
          : "user";
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
