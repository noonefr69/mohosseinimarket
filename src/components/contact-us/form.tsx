"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Field,
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
import { toPersianDigits } from "@/utils/to-persian-digits";
import { useTransition } from "react";
import { contactUsAction } from "@/actions/contact-us";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { contactUsSchema, type ContactUsFormValues } from "@/types/contact-us";

// ─── Field config ──────────────────────────────────────────────────────────

const TEXT_FIELDS: {
  name: keyof Omit<ContactUsFormValues, "userDescription">;
  label: string;
  placeholder: string;
}[] = [
  { name: "userName", label: "اسم", placeholder: "ممد حسینی" },
  {
    name: "userPhoneNumber",
    label: "شماره تلفن",
    placeholder: "0912-345-6789",
  },
  {
    name: "userSubject",
    label: "موضوع",
    placeholder: "مثال: مشکل در ثبت سفارش",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────

export function ContactUsForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      userName: "",
      userPhoneNumber: "",
      userSubject: "",
      userDescription: "",
    },
  });

  function onSubmit(data: ContactUsFormValues) {
    startTransition(async () => {
      try {
        const result = await contactUsAction(data);
        if (result.success) {
          form.reset();
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      } catch (err) {
        console.error(err);
        toast.error("اتصال اینترنت را بررسی کنید.");
      }
    });
  }

  return (
    <form id="contact-us-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="gap-0">
        {TEXT_FIELDS.map(({ name, label, placeholder }) => (
          <Controller
            key={name}
            name={name}
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                className="relative pb-7"
                data-invalid={fieldState.invalid}
              >
                <FieldLabel className="text-xl font-semibold" htmlFor={name}>
                  {label}
                </FieldLabel>
                <Input
                  {...field}
                  id={name}
                  placeholder={placeholder}
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError
                    className="absolute left-0 bottom-0 text-left text-[12px] sm:text-sm"
                    errors={[fieldState.error]}
                  />
                )}
              </Field>
            )}
          />
        ))}

        <Controller
          name="userDescription"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="relative pb-7" data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-xl font-semibold"
                htmlFor="userDescription"
              >
                توضیحات
              </FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  {...field}
                  id="userDescription"
                  placeholder="سوال، پیشنهاد یا انتقاد خود را اینجا بنویسید…"
                  rows={6}
                  className="min-h-24 resize-none"
                  aria-invalid={fieldState.invalid}
                />
                <InputGroupAddon align="block-end">
                  <InputGroupText className="tabular-nums">
                    {toPersianDigits(field.value.length)}/{toPersianDigits(200)}{" "}
                    حروف
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
          پاک کردن همه
        </Button>
        <Button type="submit" form="contact-us-form" disabled={isPending}>
          {isPending ? <Spinner /> : "ارسال"}
        </Button>
      </Field>
    </form>
  );
}
