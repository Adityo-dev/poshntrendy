import Image from "next/image";

const services = [
  {
    id: 1,
    icon: "/icons/customisations.svg",
    title: "Customisations",
    description: "Same style in a  bespoke color",
  },
  {
    id: 2,
    icon: "/icons/liveProductPreview.svg",
    title: "Live Product Preview",
    description: "Call us to see the product live.",
  },
  {
    id: 3,
    icon: "/icons/wholeSet.svg",
    title: "Don’t want the whole set?",
    description: "Buy only one item from the look",
  },
  {
    id: 4,
    icon: "/icons/earlyDelivery.svg",
    title: "Early Delivery",
    description: "Need the product sooner?",
  },
];

function WhyShopWith() {
  return (
    <section className="container mx-auto px-4">
      <div className=" rounded-[12px] bg-[#400A38] text-[#FBF9FB] py-6 px-8 grid grid-cols-12">
        <div className="col-span-9 grid grid-cols-4">
          {services.map((service) => (
            <div key={service?.id} className="flex items-center gap-2">
              <Image
                src={service?.icon}
                width={50}
                height={50}
                alt=""
                className="w-12 h-12"
              />
              <div>
                <p className="text-base">{service?.title}</p>
                <p className="text-sm">{service?.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-3 space-y-2 border-s border-[#605F5F] ps-8">
          <p>
            Do you need help with customisation or shipping of this product?
          </p>
          <button className="flex items-center gap-2 text-base text-[#FBF9FB] border-2 border-[#605F5F] px-3 py-2 rounded-md cursor-pointer">
            <Image
              src={"/icons/whatsapp.png"}
              width={100}
              height={100}
              alt=""
              className="w-6 h-6"
            />
            Chat With Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyShopWith;
