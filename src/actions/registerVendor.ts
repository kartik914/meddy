"use server";

import { RegisterVendorSchema } from "@/schemas";
import { z } from "zod";
import db from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
import { getVendorByEmail } from "@/data/vendor";
import { currentUser } from "@/lib/auth";

export const registerVendor = async (values: z.infer<typeof RegisterVendorSchema>) => {
  const loggedInUser = await currentUser();

  const validatedFields = RegisterVendorSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { shopName, email, phone, address, city, state, country, pinCode, link } = validatedFields.data;

  const existingVendor = await getVendorByEmail(email);
  const existingUser = await getUserByEmail(email);

  if (existingUser && loggedInUser?.id !== existingUser.id) {
    return {
      error: "Given email Id registered with another user!",
    };
  }

  if (existingVendor) {
    return {
      error: "Vendor already exists!",
    };
  }

  await db.vendor.create({
    data: {
      user: {
        connect: { id: loggedInUser?.id },
      },
      email,
      shopName,
      phone,
      address,
      city,
      state,
      country,
      pinCode,
      link,
      latitude: 0,
      longitude: 0,
    },
  });

  if (email !== loggedInUser?.email) {
    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(verificationToken.email, verificationToken.token);

    return {
      success: "Confirmation Email Sent!",
    };
  }

  return {
    success: "Vendor Registration Request Submitted!",
  };
};
