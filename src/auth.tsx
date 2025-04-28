import NextAuth, { type DefaultSession } from "next-auth";
import Okta from "next-auth/providers/okta";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import credentials from "next-auth/providers/credentials";
import prisma from "./lib/prisma";
import crypto from "crypto";

function generateHash(input:string) {
  // Create a SHA-256 hash of the input
  const hash = crypto.createHash("sha256").update(input).digest("hex");
  return hash;
}
let tem_providers=[]
if (process.env.AUTH_OKTA_ID&&process.env.AUTH_OKTA_SECRET&&process.env.OKTA_LOGIN_REQUIRED=='true') {
  tem_providers.push(Okta);
}
if (process.env.AUTH_GOOGLE_ID&&process.env.AUTH_GOOGLE_SECRET&&process.env.GOOGLE_LOGIN_REQUIRED=='true') {
  tem_providers.push(Google);
}
if (process.env.AUTH_GITHUB_ID&&process.env.AUTH_GITHUB_SECRET&&process.env.GITHUB_LOGIN_REQUIRED=='true') {
  tem_providers.push(Github);
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [...tem_providers,
    // ...add more providers here
    credentials({
      name: "Credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        const hashedPassword = generateHash(credentials?.password as string);
        // console.log(credentials, hashedPassword, "credentials");
        let user = null;
        let data: any = await prisma.user.findUnique({
          where: {
            email: credentials?.email as string,
          },
        });
        // console.log(data, "data");
        if (data) {
          // user = data;
          if (hashedPassword != data.password) {
            return null;
          }
          user = {
            id: data.id,
            name: data.name,
            email: data.email,
            password: data.password || "",
            address: data.address || "",
            phone: data.phone || "",
          };
        } else {
          const newUser = await prisma.user.create({
            data: {
              email: credentials?.email as string,
              password: hashedPassword,
              name: credentials?.email as string,
            },
          });
          user = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password || "",
            address: newUser.address || "",
            phone: newUser.phone || "",
          };
        }
     
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
        }
      },
    }),
  ],
});
