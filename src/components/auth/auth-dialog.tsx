"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { closeDialog } from "@/redux/features/auth-dialog-slice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import ForgotPasswordForm from "./forgot-password-form";
import NewVerificationForm from "./new-verification-form";
import { ErrorCard } from "./error-card";
import NewPasswordForm from "./new-password-form";
import { useCurrentUser } from "@/hooks/use-current-user";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { AuthDialogType } from "@/constants/dialogs";
import RegisterVendorForm from "./register-vendor-form";

const AuthDialog = () => {
  const { isOpen, formType } = useSelector((state: RootState) => state.dialog);
  const router = useRouter();
  const path = usePathname();
  const dispatch = useDispatch();
  const user = useCurrentUser();
  const searchParams = useSearchParams();

  useEffect(() => {
    let params = "";

    searchParams.forEach((value, key) => {
      if (key === "dialog") {
        if (value === AuthDialogType.CLOSE) {
          dispatch(closeDialog());
        }
        return;
      }
      params += `${key}=${value}&`;
    });
    router.replace(path + "?" + params);
  }, [router, path, searchParams, dispatch]);

  if (user && formType !== AuthDialogType.REGISTER_VENDOR) {
    return;
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && dispatch(closeDialog())}>
      <DialogTitle className=""></DialogTitle>
      <DialogContent className="w-min p-0 max-h-[80vh] overflow-y-auto no-scrollbar">
        <AuthForm />
      </DialogContent>
    </Dialog>
  );

  function AuthForm() {
    if (formType === AuthDialogType.LOGIN) {
      return <LoginForm />;
    }

    if (formType === AuthDialogType.REGISTER) {
      return <RegisterForm />;
    }

    if (formType === AuthDialogType.FORGOT_PASSWORD) {
      return <ForgotPasswordForm />;
    }

    if (formType === AuthDialogType.NEW_VERIFICATION) {
      return <NewVerificationForm />;
    }

    if (formType === AuthDialogType.ERROR) {
      //TODO: Add error message
      return <ErrorCard error="Someting Went Wrong" />;
    }

    if (formType === AuthDialogType.NEW_PASSWORD) {
      return <NewPasswordForm />;
    }

    if (formType === AuthDialogType.REGISTER_VENDOR) {
      return <RegisterVendorForm />;
    }
  }
};

export default AuthDialog;
