"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
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
import { UserProps } from "@/actions/user/get-user";

const formSchema = z.object({
  first_name: z
    .string()
    .min(2, "نام باید حداقل ۲ کاراکتر باشد.")
    .max(50, "نام نمی‌تواند بیشتر از ۵۰ کاراکتر باشد."),
  last_name: z
    .string()
    .min(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد.")
    .max(50, "نام خانوادگی نمی‌تواند بیشتر از ۵۰ کاراکتر باشد."),
  phone: z
    .string()
    .startsWith("09")
    .min(11, "شماره موبایل باید ۱۱ رقم باشد.")
    .max(11, "شماره موبایل باید ۱۱ رقم باشد."),
  email: z
    .email({ message: "ایمیل معتبر نیست." })
    .max(100, "ایمیل نمی‌تواند بیشتر از ۱۰۰ کاراکتر باشد."),
  address: z
    .string()
    .min(10, "آدرس باید حداقل ۱۰ کاراکتر باشد.")
    .max(500, "آدرس نمی‌تواند بیشتر از ۵۰۰ کاراکتر باشد."),
});

export function EditUserInfo({ user_data }: { user_data: UserProps }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: user_data.first_name,
      last_name: user_data.last_name,
      phone: user_data.phone,
      email: user_data.email,
      address: user_data.address,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="lg:text-xl font-semibold">مشخصات شما</CardTitle>
        <CardDescription>
          شما میتوانید هر مشخصاتی که دارید را ویرایش کنید.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="edit_user_info" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="grid grid-cols-2 gap-2">
            <Controller
              name="first_name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="first_name">نام</FieldLabel>
                  <Input
                    {...field}
                    id="first_name"
                    aria-invalid={fieldState.invalid}
                    placeholder="ممد"
                    className="py-6"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="last_name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className="" data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="last_name">نام خانوادگی</FieldLabel>
                  <Input
                    {...field}
                    id="last_name"
                    aria-invalid={fieldState.invalid}
                    placeholder="ممدی"
                    autoComplete="off"
                    className="py-6"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className="" data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="phone">شماره تلفن</FieldLabel>
                  <Input
                    {...field}
                    id="phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="09xx xxx xxxx"
                    autoComplete="off"
                    className="py-6"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className="" data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">ایمیل</FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="example@gmail.com"
                    autoComplete="off"
                    className="py-6"
                    type="email"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="address"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className="col-span-2" data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="address">آدرس</FieldLabel>
                  <Input
                    {...field}
                    id="address"
                    aria-invalid={fieldState.invalid}
                    placeholder="مثال: چهاراه آبرسان, رو به روی مدرسه پناهی, پلاک ششم, واحد دوم "
                    autoComplete="off"
                    className="py-6"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="">
        <Field
          orientation="horizontal"
          className="flex flex-row items-center justify-end"
        >
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            رفرش
          </Button>
          <Button type="submit" form="edit_user_info">
            تایید
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
