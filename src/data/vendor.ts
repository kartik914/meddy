import db from "@/lib/db";

export const getVendorByEmail = async (email: string) => {
    try {
      return await db.vendor.findUnique({
        where: {
          email,
        },
      });
    } catch {
      return null;
    }
  };