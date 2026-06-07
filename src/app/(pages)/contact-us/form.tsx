"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { toPersianDigits } from "@/lib/to-persian-digits";

const formSchema = z.object({
  userName: z
    .string()
    .min(2, `اسم شما حداقل باید از ${toPersianDigits(2)} حروف تشکیل شده باشد.`)
    .max(
      32,
      `اسم شما حداکثر باید از ${toPersianDigits(32)} حروف تشکیل شده باشد.`,
    ),
  userPhoneNumber: z
    .string()
    .startsWith("09", `شماره تلفن نامعتبر است.`)
    .min(11, `شماره تلفن نامعتبر است.`)
    .max(11, `شماره تلفن نامعتبر است.`),
  userSubject: z
    .string()
    .min(
      2,
      `موضوع شما حداقل باید از ${toPersianDigits(2)} حروف تشکیل شده باشد.`,
    )
    .max(
      32,
      `موضوع شما حداکثر باید از ${toPersianDigits(32)} حروف تشکیل شده باشد.`,
    ),
  userDescription: z
    .string()
    .min(
      10,
      `توضیحات شما حداقل باید از ${toPersianDigits(10)} حروف تشکیل شده باشد.`,
    )
    .max(
      200,
      `توضیحات شما نمیتواند بیشتر از ${toPersianDigits(200)} حروف باشد.`,
    ),
});

export function ContactUsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      userPhoneNumber: "",
      userSubject: "",
      userDescription: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(data);
  }

  return (
    <form id="contact-us-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="gap-0">
        <Controller
          name="userName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="relative pb-7" data-invalid={fieldState.invalid}>
              <FieldLabel className="text-xl font-semibold" htmlFor="userName">
                اسم
              </FieldLabel>
              <Input
                {...field}
                id="userName"
                aria-invalid={fieldState.invalid}
                placeholder="کمک"
                autoComplete="off"
              />
              {fieldState.invalid && (
                <FieldError
                  className="absolute left-0 bottom-0 text-left"
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />
        <Controller
          name="userPhoneNumber"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="relative pb-7" data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-xl font-semibold"
                htmlFor="userPhoneNumber"
              >
                شماره تلفن
              </FieldLabel>
              <Input
                {...field}
                id="userPhoneNumber"
                aria-invalid={fieldState.invalid}
                placeholder="کمک"
                autoComplete="off"
              />
              {fieldState.invalid && (
                <FieldError
                  className="absolute left-0 bottom-0 text-left"
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />
        <Controller
          name="userSubject"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="relative pb-7" data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-xl font-semibold"
                htmlFor="userSubject"
              >
                موضوع
              </FieldLabel>
              <Input
                {...field}
                id="userSubject"
                aria-invalid={fieldState.invalid}
                placeholder="کمک"
                autoComplete="off"
              />
              {fieldState.invalid && (
                <FieldError
                  className="absolute left-0 bottom-0 text-left"
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />
        <Controller
          name="userDescription"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="relative pb-7" data-invalid={fieldState.invalid}>
              <FieldLabel className="text-xl font-semibold" htmlFor="form-rhf-demo-description">
                Description
              </FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  {...field}
                  id="form-rhf-demo-description"
                  placeholder="کمک"
                  rows={6}
                  className="min-h-24 resize-none"
                  aria-invalid={fieldState.invalid}
                />
                <InputGroupAddon align="block-end">
                  <InputGroupText className="tabular-nums">
                    {toPersianDigits(field.value.length)}/{toPersianDigits(200)}{" "}
                    حروف{" "}
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && (
                <FieldError
                  className="absolute left-0 bottom-0 text-left"
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />
      </FieldGroup>
      <Field orientation="horizontal" className="mt-2.5">
        <Button type="button" variant="outline" onClick={() => form.reset()}>
          پاک کردم همه
        </Button>
        <Button type="submit" form="contact-us-form">
          تایید
        </Button>
      </Field>
    </form>
  );
}
