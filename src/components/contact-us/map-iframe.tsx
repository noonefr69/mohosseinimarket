import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import Image from "next/image";

export default function MapIframe() {
  return (
    <Tabs
      defaultValue="soft-map"
      className="w-full h-100 overflow-hidden flex-col mt-4"
    >
      <TabsList className="data-[state=active]:*:font-bold">
        <TabsTrigger className="cursor-pointer" value="soft-map">
          نقشه متحرک
        </TabsTrigger>
        <TabsTrigger className="cursor-pointer" value="hard-map">
          نقشه ثابت
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="soft-map"
        className="bg-accent rounded-2xl overflow-hidden"
      >
        <div className="rounded-3xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d196.32907784549636!2d46.32242787974924!3d38.064203456923806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1781166444398!5m2!1sen!2s"
            width="100%"
            height="450"
            className="rounded-2xl outline-none ring-0"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </TabsContent>
      <TabsContent
        value="hard-map"
        className="bg-accent rounded-2xl overflow-hidden"
      >
        <Image
          className="w-full object-cover h-100"
          src={`/map.png`}
          alt="hard-code-map"
          width={700}
          height={200}
        />
      </TabsContent>
    </Tabs>
  );
}
