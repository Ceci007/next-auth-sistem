"use server"

import { auth } from "@/lib/auth";

export const signIn = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      }
    })
    console.log("User Signed In");
  } catch(error) {
    throw error;
  }
}

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "orchdev@test.com",
      password: "password123",
      name: "Orc Dev"
    }
  })
}