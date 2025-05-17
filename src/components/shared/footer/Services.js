import Image from "next/image";

const services = [
  {
    id: 1,
    icon: "/icons/shipping.svg",
    title: "Free Shipping",
    description: "Whin Ordering over $100",
  },
  {
    id: 2,
    icon: "/icons/freeReturn.svg",
    title: "Free Return",
    description: "Get return within 30 days",
  },
  {
    id: 3,
    icon: "/icons/securePayment.svg",
    title: "Secure Payment",
    description: "100% Secure Online payment",
  },
  {
    id: 4,
    icon: "/icons/bestQuality.svg",
    title: "Best Quality",
    description: "Orginal Product Guarteed",
  },
];

function Services() {
  return (
    <section className="container mx-auto rounded-[12px] bg-[#E60CD9] text-[#FBF9FB] py-6 px-12 flex items-center justify-between">
      {services.map((service) => (
        <div key={service?.id} className="flex items-center gap-2">
          <Image
            src={service?.icon}
            width={50}
            height={50}
            alt={`${service?.title} icon...`}
            className="w-12 h-12 object-contain"
          />
          <div>
            <p className="text-base">{service?.title}</p>
            <p className="text-sm">{service?.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Services;
