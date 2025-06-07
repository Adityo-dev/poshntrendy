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

export function ProductsDetailsAccordion({ productData }) {
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
          <p className="text-[#605F5F] mt-1">{productData?.description}</p>
        </AccordionContent>
      </AccordionItem>

      {/* PRICE CODE */}
      <AccordionItem value="item-2" className="border-b border-[#605F5F] py-3">
        <AccordionTrigger className="text-[#000] font-semibold ">
          PRICE CODE
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-[#605F5F] mt-1">{productData?.productCode}</p>
        </AccordionContent>
      </AccordionItem>

      {/* PRICE MATCH PROMISE */}
      <AccordionItem value="item-3" className="border-b border-[#605F5F] py-3">
        <AccordionTrigger className="text-[#000] font-semibold ">
          PRICE SPECIFICATIONS
        </AccordionTrigger>
        <AccordionContent>
          {productData?.specifications && (
            <table className="w-full border border-gray-300 mt-4">
              <tbody>
                {Object.entries(productData.specifications).map(
                  ([key, value]) => (
                    <tr key={key} className="border">
                      <td className="px-2 py-1 font-medium text-gray-700 bg-gray-100">
                        {key}
                      </td>
                      <td className="px-2 py-1 text-gray-800">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </AccordionContent>
      </AccordionItem>

      {/* REVIEW */}
      <AccordionItem value="item-4" className="border-b border-[#605F5F] py-3 ">
        <AccordionTrigger className="text-[#000] font-semibold ">
          REVIEW
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-[#605F5F] mt-1">
            You can not add the review on this product as you have not purchased
            this product yet.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
