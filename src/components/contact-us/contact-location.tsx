import { contact_us_details } from "@/consts/links";
import MapIframe from "./map-iframe";

export default function ContactLocation() {
  return (
    <>
      <h1 className="text-2xl font-semibold">موقعیت مکانی سوپرمارکت</h1>
      <MapIframe />
      <ul className="mt-7  text-right flex sm:flex-row flex-col justify-around gap-6">
        {contact_us_details.map((item, i) => (
          <li key={i}>
            <h1 className="font-semibold">{item.label}</h1>
            <div className="">
              {item.values.map((value, i) => (
                <div
                  className={`text-muted-foreground  ${item.label === "شماره تلفن" ? "text-nowrap" : ""}`}
                  dir="ltr"
                  key={i}
                >
                  {value}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
