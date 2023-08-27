import { PrismaAdapter } from "@/lib/auth/prisma-adapter";
import { NextApiRequest, NextApiResponse } from "next";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GitHubProvider, { GithubProfile } from "next-auth/providers/github";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";

export function buildNextNextAuthOptions(
  req: NextApiRequest,
  res: NextApiResponse
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),

    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID ?? "",
        clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
        profile(profile: GithubProfile) {
          return {
            id: String(profile.id),
            name: profile.name!,
            email: profile.email!,
            avatar_url: profile.avatar_url,
          };
        },
      }),

      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        profile(profile: GoogleProfile) {
          return {
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            avatar_url: profile.picture,
          };
        },
      }),
    ],
    callbacks: {
      async session({ session, user }) {
        return {
          ...session,
          user,
        };
      },
    },
  };
}

export async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextNextAuthOptions(req, res));
}

export { auth as GET, auth as POST };
