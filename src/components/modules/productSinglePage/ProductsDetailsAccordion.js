import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Sample data for Info Grid (replace with actual data or prop)
const infoGrid = [
  {
    id: 1,
    title: "Components",
    subTitle: "3 (Lehenga, Blouse, Dupatta)",
  },
  {
    id: 2,
    title: "FIT",
    subTitle: "Fitted at bust and waist",
  },
  {
    id: 3,
    title: "COMPOSITION",
    subTitle: "Brocade, Tulle",
  },
  {
    id: 4,
    title: "CARE",
    subTitle: "Dry clean only",
  },
];

export function ProductsDetailsAccordion() {
  return (
    <Accordion
      defaultValue="item-1"
      type="single"
      collapsible
      className="w-full"
    >
      {/* PRICE DESCRIPTION */}
      <AccordionItem value="item-1" className="border-b border-[#605F5F] py-3">
        <AccordionTrigger className="text-[#000] font-semibold ">
          PRICE DESCRIPTION
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-[#605F5F] mb-2 mt-1">
            Tarun Tahiliani features red lehenga in brocade base with dabka,
            sitara and kundan embroidery, including gata detailing. It is paired
            wirth a blouse having crystal frines detail and a tulle dupatta.
            Style it with statement jewellery and heels for a perfect bridal
            look.
          </p>
          <p className="text-[#000] text-sm">
            <strong>PRICE CODE:</strong>
            <span className="text-[#605F5F]"> TATC0523165</span>
            <span className="text-[#E82323] underline cursor-pointer pl-4">
              View Supplier Information
            </span>
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* CASHACK10 */}
      <AccordionItem value="item-2" className="border-b border-[#605F5F] py-3">
        <AccordionTrigger className="text-[#000] font-semibold ">
          CASHACK10
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center justify-between mt-1">
            <p className="text-[#605F5F]">
              <span>
                Purchase this product and receive 10% in loyalty points!
              </span>
              <span className="text-[#E94F58] underline cursor-pointer pl-2">
                (T&C Applied)
              </span>
            </p>
            <p className="text-[#E94F58] cursor-pointer font-semibold">
              COPY CODE
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* PRICE MATCH PROMISE */}
      <AccordionItem value="item-3" className="border-b border-[#605F5F] py-3">
        <AccordionTrigger className="text-[#000] font-semibold ">
          PRICE MATCH PROMISE
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center justify-between mt-1">
            <p className="text-[#605F5F]">
              <span>If you find the product for less we’ll match it!</span>{" "}
              <span className="text-[#E94F58] underline cursor-pointer pl-2">
                (T&C Applied)
              </span>
            </p>
            <p className="text-[#E94F58] cursor-pointer font-semibold">
              KNOW MORE
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* INFO GRID */}
      <AccordionItem value="item-4" className="border-b border-[#605F5F] py-3 ">
        <AccordionTrigger className="text-[#000] font-semibold ">
          PRODUCT INFORMATION
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-3 gap-4">
            {infoGrid.map((info) => (
              <div key={info?.id}>
                <strong className="text-sm">{info?.title}</strong>
                <p>{info?.subTitle}</p>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* SHIPPING INFORMATION */}
      <AccordionItem value="item-5" className="border-b border-[#605F5F] py-3">
        <AccordionTrigger className="text-[#000] font-semibold ">
          SHIPPING INFORMATION
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-[#605F5F] mb-2 mt-1">
            This product will be shipped to you after 1–2 weeks from the date of
            order placed. All custom made orders are not returnable.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* DISCLAIMER */}
      <AccordionItem value="item-6" className="border-b border-[#605F5F] py-3">
        <AccordionTrigger className="text-[#000] font-semibold ">
          DISCLAIMER
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-[#605F5F] mb-2 mt-1">
            This product will be exclusively handcrafted for you, making the
            color/texture/pattern slightly vary from the image shown, due to
            multiple artisan-led techniques and processes involved.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
