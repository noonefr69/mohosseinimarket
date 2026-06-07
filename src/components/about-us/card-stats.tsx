import { Card, CardContent } from "../ui/card";
import { about_us_const } from "@/consts/links";

export default function CardStats() {
  return (
    <ul
      id="faqs"
      className="grid lg:grid-cols-3 gap-2 md:gap-6 sm:grid-cols-2 grid-cols-1"
    >
      {about_us_const.map((item, i) => (
        <li key={i}>
          <Card className="">
            <CardContent className="text-center">
              <h1 className="text-3xl font-semibold mb-3">{item.number}</h1>
              <h3 className="text-muted-foreground">{item.title}</h3>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
}
