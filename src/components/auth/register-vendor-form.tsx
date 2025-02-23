"use client";

import { useForm } from "react-hook-form";
import AuthCardWrapper from "./auth-card-wrapper";
import { z } from "zod";
import { RegisterVendorSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import MessageCard from "@/components/message-card";
import { closeDialog } from "@/redux/features/auth-dialog-slice";
import { useDispatch } from "react-redux";
import { registerVendor } from "@/actions/registerVendor";
import { Textarea } from "../ui/textarea";

const RegisterVendorForm = () => {
  const dispatch = useDispatch();
  const [isPending, startTransition] = useTransition();
  const [formMessage, setFormMessage] = useState<{
    type: "success" | "error";
    message: string | undefined;
  } | null>(null);

  const form = useForm<z.infer<typeof RegisterVendorSchema>>({
    resolver: zodResolver(RegisterVendorSchema),
    defaultValues: {
      email: "",
      shopName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
      link: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterVendorSchema>) => {
    setFormMessage(null);

    startTransition(() => {
      registerVendor(values).then((data) => {
        setFormMessage({
          type: data.success ? "success" : "error",
          message: data.success ? data.success : data.error,
        });
      });
    });
  };

  return (
    <AuthCardWrapper
      headerLabel="Register as Vendor!"
      backButtonHref=""
      backButtonLabel="Close"
      onBackClick={() => dispatch(closeDialog())}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="shopName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shop Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Shop Name" disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="example@gmail.com" type="email" disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone No</FormLabel>
                  <FormControl>
                    <Input {...field} type="tel" disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pinCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pin Code</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Google Maps Link</FormLabel>
                  <FormControl>
                    <Input {...field} type="url" disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <MessageCard type={formMessage?.type} message={formMessage?.message} />
          <Button type="submit" size="lg" variant="default" className="w-full" disabled={isPending}>
            Register
          </Button>
        </form>
      </Form>
    </AuthCardWrapper>
  );
};

export default RegisterVendorForm;
