import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FilterAccordion = ({
  title,
  options,
  selectedOptions,
  onChange,
  valueKey,
}) => {
  if (options.length === 0) return null;

  return (
    <AccordionItem value={valueKey} className="border rounded-md">
      <AccordionTrigger className="text-[#000] font-semibold p-3 [&[data-state=open]]:border-b">
        {title.toUpperCase()}
      </AccordionTrigger>
      <AccordionContent className="px-4 py-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center mb-2 text-[#605F5F] cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => onChange(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
