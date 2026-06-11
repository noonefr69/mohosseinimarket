import { contact_us_details } from "@/consts/links";
import MapIframe from "./map-iframe";

export default function ContactLocation() {
  return (
    <>
      <h1 className="text-2xl font-semibold">موقعیت مکانی سوپرمارکت</h1>
      <MapIframe />
      <ul className="mt-7 justify-center text-center sm:text-right sm:justify-start grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {contact_us_details.map((item, i) => (
          <li key={i}>
            <h1 className="font-semibold">{item.label}</h1>
            <div>
              {item.values.map((value, i) => (
                <div className=" text-muted-foreground" dir="ltr" key={i}>
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
