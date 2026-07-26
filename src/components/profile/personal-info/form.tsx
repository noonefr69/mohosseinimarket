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
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { UserProps } from "@/actions/user/get-user";
import { editUserInfo } from "@/actions/user/edit-user-info";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { edit_form_schema } from "@/lib/edit_form_schema";

export function EditUserInfo({ user_data }: { user_data: UserProps }) {
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<z.infer<typeof edit_form_schema>>({
    resolver: zodResolver(edit_form_schema),
    defaultValues: {
      first_name: user_data.first_name || "",
      last_name: user_data.last_name || "",
      phone: user_data.phone || "",
      email: user_data.email || "",
      address: user_data.address || "",
    },
  });

  function onSubmit(data: z.infer<typeof edit_form_schema>) {
    startTransition(async () => {
      try {
        const result = await editUserInfo(data);

        if (!result.success) {
          toast.error(result?.error || "خطای ناشناخته در سرور");
          return;
        }

        toast.success("اطلاعات شما با موفقیت ویرایش شد.");
      } catch (err) {
        console.error(err);
        toast.error(
          "مشکلی پیش آمده است. لطفاً از متصل بودن اینترنت خود مطمئن شوید.",
        );
      }
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="lg:text-xl font-semibold">مشخصات شما</CardTitle>
        <CardDescription>
          شما می‌توانید مشخصات خود را در این بخش ویرایش کنید.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="edit_user_info" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    placeholder="مثال: ممد"
                    className="py-6"
                    autoComplete="given-name"
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
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="last_name">نام خانوادگی</FieldLabel>
                  <Input
                    {...field}
                    id="last_name"
                    aria-invalid={fieldState.invalid}
                    placeholder="مثال: ممدی"
                    className="py-6"
                    autoComplete="family-name"
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
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="phone">شماره تلفن</FieldLabel>
                  <Input
                    {...field}
                    id="phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="09123456789"
                    className="py-6"
                    autoComplete="tel"
                    inputMode="numeric"
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
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">ایمیل</FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="example@gmail.com"
                    className="py-6"
                    type="email"
                    autoComplete="email"
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
                <Field
                  className="col-span-1 md:col-span-2"
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor="address">آدرس</FieldLabel>
                  <Textarea
                    {...field}
                    id="address"
                    aria-invalid={fieldState.invalid}
                    placeholder="مثال: چهاراه آبرسان، رو به روی مدرسه پناهی، پلاک ششم، واحد دوم"
                    className="min-h-[100px] resize-y"
                    autoComplete="street-address" // ✅ Proper autocomplete
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
      <CardFooter className="flex flex-row items-center justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => form.reset()}
          disabled={isPending}
        >
          بازنشانی
        </Button>
        <Button disabled={isPending} type="submit" form="edit_user_info">
          {isPending ? <Spinner className="mr-2" /> : null}
          {isPending ? "در حال ذخیره..." : "تایید"}
        </Button>
      </CardFooter>
    </Card>
  );
}
