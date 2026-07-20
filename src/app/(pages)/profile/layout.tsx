import ProfNavigation from "@/components/profile/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "خلاصه فعالیت",
    template: "%s / سوپرمارکت مبلغ حسینی",
  },
  description:
    "پروفایل کاربری شما در سوپر مارکت مبلغ حسینی | مشاهده تاریخچه سفارشات، ویرایش اطلاعات شخصی و پیگیری خریدهای قبلی | وارد شوید و سفارش‌تان را مدیریت کنید",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <ProfNavigation />
      <div className="col-span-12 order-1 lg:order-2 lg:col-span-9">
        {children}
      </div>
    </div>
  );
}
