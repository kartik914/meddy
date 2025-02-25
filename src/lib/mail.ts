import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = "meddy.send@builtbykartik.me";

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: fromEmail,
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA Code: ${token}</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmationLink = `${process.env.FRONTEND_URL}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: fromEmail,
    to: email,
    subject: "Confirm your email address",
    html: `<p>Click <a href="${confirmationLink}">Here</a> To Confirm Your Email</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const passwordResetEmail = `${process.env.FRONTEND_URL}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: fromEmail,
    to: email,
    subject: "Reset Your Password",
    html: `<p>Click <a href="${passwordResetEmail}">Here</a> To Reset Your Password</p>`,
  });
};
