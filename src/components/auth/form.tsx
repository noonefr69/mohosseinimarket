"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import ButtonLink from "../button-link";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  phone_number: z
    .string("لطفا شماره موبایل خود را وارد کنید.")
    .min(11, "شماره موبایل اشتباه است.")
    .max(11, "شماره موبایل اشتباه است."),
});

export function AuthenticationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone_number: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    await signIn("credentials", {
      phone: data.phone_number,
      redirectTo: "/profile",
    });
  }

  return (
    <form id="auth-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="phone_number"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-demo-title">
                شماره موبایل
              </FieldLabel>
              <Input
                {...field}
                id="form-rhf-demo-title"
                aria-invalid={fieldState.invalid}
                placeholder="09xx xxx xxxx"
                autoComplete="off"
                className="py-6 text-lg font-semibold"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button
        type="submit"
        form="auth-form"
        className="mt-4 w-full text-lg py-6"
        size={"lg"}
      >
        ورود به فروشگاه
      </Button>
      <p className="mt-7 text-xs">
        ورود شما به معنای پذیرش{" "}
        <ButtonLink
          href="/"
          text={" شرایط سوپرمارکت مبلغ حسینی"}
          variant={"link"}
          buttonClassName="p-0 text-xs"
        />{" "}
        و{" "}
        <ButtonLink
          href="/"
          text={"قوانین حریم‌ خصوصی"}
          variant={"link"}
          buttonClassName="p-0 text-xs"
        />{" "}
        است.
      </p>
    </form>
  );
}
