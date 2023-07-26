import NextAuth from "next-auth/next";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [],
};
export default NextAuth(authOptions);
