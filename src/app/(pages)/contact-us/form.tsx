"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

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

// ─── Schema ────────────────────────────────────────────────────────────────

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
    .startsWith("09", "شماره تلفن نامعتبر است.")
    .length(11, "شماره تلفن نامعتبر است."),
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

type FormValues = z.infer<typeof formSchema>;

// ─── Field config ──────────────────────────────────────────────────────────

const TEXT_FIELDS: {
  name: keyof Omit<FormValues, "userDescription">;
  label: string;
  placeholder: string;
}[] = [
  { name: "userName", label: "اسم", placeholder: "علی رضایی" },
  { name: "userPhoneNumber", label: "شماره تلفن", placeholder: "09123456789" },
  { name: "userSubject", label: "موضوع", placeholder: "مشکل در ثبت سفارش" },
];

// ─── Component ─────────────────────────────────────────────────────────────

export function ContactUsForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      userPhoneNumber: "",
      userSubject: "",
      userDescription: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <form id="contact-us-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="gap-0">
        {/* Text fields */}
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

        {/* Description (textarea — separate because it has a character counter) */}
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
        <Button type="submit" form="contact-us-form">
          ارسال
        </Button>
      </Field>
    </form>
  );
}
