"use client";

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
import { DialogFooter } from "../ui/dialog";
import { useTransition } from "react";
import { editAddress } from "@/actions/user/edit-address";
import { Spinner } from "../ui/spinner";
import { toast } from "sonner";

const formSchema = z.object({
  address: z
    .string()
    .min(1, "آدرس حداقل باید با یک حرف شروع بشود.")
    .max(100, "آدرس حداکثر میتواند صد حرف باشد."),
});

export function EditAddressForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const result = await editAddress(data.address);

        if (result.success) {
          toast.success("آدرس با موفقیت ذخیره شد.");
          form.reset();
        } else {
          toast.error(result.error || "خطایی رخ داده است.");
        }
      } catch (err) {
        console.error(err);
        toast.error(
          "ارتباط با سرور برقرار نشد. لطفا اتصال اینترنت خود را بررسی کنید.",
        );
      }
    });
  }

  return (
    <form id="edit_address_form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="address"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="address_form_label">آدرس</FieldLabel>
              <Input
                {...field}
                id="address_form_label"
                aria-invalid={fieldState.invalid}
                placeholder="مثال: خیابان ولیعصر، پلاک ۱۲۳، واحد ۴"
                autoComplete="off"
                className="py-6"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <DialogFooter className="mt-4">
        <Field orientation="horizontal" className="justify-end">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            پاک کردن
          </Button>
          <Button disabled={isPending} type="submit" form="edit_address_form">
            {isPending ? <Spinner /> : "ذخیره اطلاعات"}
          </Button>
        </Field>
      </DialogFooter>
    </form>
  );
}
