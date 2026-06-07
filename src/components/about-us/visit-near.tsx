import ButtonLink from "../button-link";

export default function VisitNear() {
  return (
    <div className="flex items-center justify-between mt-7 bg-black/85 text-white px-12 py-20 rounded-2xl">
      <div>
        <h1 className="text-4xl font-semibold mb-4">به ما سر بزنید</h1>
        <p>هفت‌روز هفته بازیم, هر چه نیاز دارید، همین نزدیکی</p>
      </div>
      <div>
        <ButtonLink
          text={`موقعیت مکانی ما ←`}
          href="/contact-us"
          variant={"default"}
          size={"lg"}
          buttonClassName="text-lg py-5 px-4 font-semibold"
        />
      </div>
    </div>
  );
}
