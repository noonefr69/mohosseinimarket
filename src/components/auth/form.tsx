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
import { useTransition } from "react";
import { Spinner } from "../ui/spinner";
import { toPersianDigits } from "@/utils/to-persian-digits";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { InfoIcon } from "lucide-react";

const formSchema = z.object({
  phone_number: z
    .string("لطفا شماره موبایل خود را وارد کنید.")
    .startsWith("09", "شماره موبایل اشتباه است.")
    .min(11, "شماره موبایل اشتباه است.")
    .max(11, "شماره موبایل اشتباه است."),
});

export function AuthenticationForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone_number: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        await signIn("credentials", {
          phone: data.phone_number,
          redirectTo: "/profile",
        });
      } catch (error) {
        console.log(error);
      }
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
              <FieldLabel htmlFor="sign-in-form">شماره موبایل</FieldLabel>
              <InputGroup
                {...field}
                id="sign-in-form"
                dir="ltr"
                className="py-6 text-lg font-semibold"
              >
                <InputGroupInput
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  dir="rtl"
                  placeholder={toPersianDigits("09xx xxx xxxx")}
                  className=""
                />
                {fieldState.invalid && (
                  <InputGroupAddon className="pl-2">
                    <InfoIcon className="text-destructive" />
                  </InputGroupAddon>
                )}
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button
        disabled={isPending}
        type="submit"
        // form="auth-form"
        className="mt-4 w-full text-lg py-6"
        size={"lg"}
      >
        {isPending ? <Spinner /> : " ورود به فروشگاه"}
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
