import { Separator } from "@/components/ui/separator";
import { ContactUsForm } from "../../../components/contact-us/form";
import ContactHeader from "@/components/contact-us/contact-header";
import ContactLocation from "@/components/contact-us/contact-location";

export default function ContactUs() {
  return (
    <div>
      <div className="gap-6 mt-4">
        <ContactHeader />
      </div>

      <Separator className="my-7" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ContactUsForm />
        </div>
        <div className="">
          <ContactLocation />
        </div>
      </div>
    </div>
  );
}
