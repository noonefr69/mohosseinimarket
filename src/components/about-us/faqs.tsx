import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faqs } from "@/consts/links";

export default function Faqs() {
  return (
    <div>
      {/* <h1 className="text-4xl font-semibold mb-4">سوالات متداول</h1> */}
      <Accordion type="single" collapsible defaultValue="item-1">
        {faqs.map((item, i) => (
          <AccordionItem key={i} value={`item-${i + 1}`}>
            <AccordionTrigger className="cursor-pointer text-lg font-semibold]">
              <span className="max-w-[90%] text-right">{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-justify">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
