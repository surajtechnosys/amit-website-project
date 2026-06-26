import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (credentials == null) return null;

                // find user in database
                const user = await prisma.user.findFirst({
                    where: { email: credentials.email as string },
                });


                // check if user exist and if the password matches
                if (user && user.password) {
                    const isMatched = await bcrypt.compare(
                        credentials.password as string,
                        user.password,
                    );


                    // if password  is correct , return user
                    if (isMatched) {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                        };
                    }
                }

                // if user does not exist or password does not matched return null
                return null;
            },
        }),
    ],

    session: {
        strategy: "jwt",
    },

    pages: {
        signIn: "/login",
    },

    secret: process.env.AUTH_SECRET,
});