import MarqueeCompo from "./MarqueeCompo";

const ClientStories = () => {
  const clientsReviewData = [
    {
      date: "12.02.2025",
      image: "/image/product1.jpg",
      name: "Emily R.",
      designation: "CEO - Founder",
      rating: 5,
      description:
        "Declives Corporation delivered beyond expectations. Their team handled our complex project seamlessly from start to finish.",
    },
    {
      date: "14.02.2025",
      image: "/image/product2.jpg",
      name: "John D.",
      designation: "Managing Director",
      rating: 5,
      description:
        "The project was completed ahead of schedule with zero compromises on quality. Will definitely work with them again.",
    },
    {
      date: "15.02.2025",
      image: "/image/product3.jpg",
      name: "Sophia W.",
      designation: "Product Manager",
      rating: 4.5,
      description:
        "Professional team that understood our vision perfectly. The final deliverable matched our mockups pixel-perfectly.",
    },
    {
      date: "16.02.2025",
      image: "/image/product4.jpg",
      name: "Michael B.",
      designation: "CTO",
      rating: 5,
      description:
        "Rare to find a partner that combines technical excellence with such strong business acumen. Declives nailed both.",
    },
    {
      date: "18.02.2025",
      image: "/image/product5.jpg",
      name: "Sarah L.",
      designation: "Marketing Head",
      rating: 4.8,
      description:
        "Our campaign performance increased by 220% after implementing their strategies. Data-driven and creative!",
    },
    {
      date: "22.02.2025",
      image: "/image/product6.jpg",
      name: "David K.",
      designation: "Operations Lead",
      rating: 4.7,
      description:
        "Streamlined our supply chain processes beautifully. The automation solutions saved us 30+ hours weekly.",
    },
    {
      date: "03.03.2025",
      image: "/image/product7.jpg",
      name: "Priya M.",
      designation: "UX Director",
      rating: 4.9,
      description:
        "User testing scores improved dramatically after their redesign. They truly understand human-centered design.",
    },
    {
      date: "15.03.2025",
      image: "/image/product8.jpg",
      name: "Robert C.",
      designation: "Finance Director",
      rating: 4.6,
      description:
        "Implemented cost-saving measures without cutting corners. Their financial insights were invaluable.",
    },
    {
      date: "22.03.2025",
      image: "/image/product9.jpg",
      name: "Linda S.",
      designation: "HR Manager",
      rating: 4.8,
      description:
        "Transformed our recruitment process with AI tools that still maintain the human touch. Impressive balance.",
    },
    {
      date: "05.04.2025",
      image: "/image/product10.jpg",
      name: "James W.",
      designation: "Tech Lead",
      rating: 5,
      description:
        "Migrated our entire infrastructure to cloud with zero downtime. Flawless execution by Declives team.",
    },
    {
      date: "18.04.2025",
      image: "/image/product11.jpg",
      name: "Anna B.",
      designation: "Business Consultant",
      rating: 4.7,
      description:
        "Provided actionable insights that helped us enter two new markets successfully. Strategic thinkers.",
    },
    {
      date: "02.05.2025",
      image: "/image/product1.png",
      name: "Thomas L.",
      designation: "Senior Engineer",
      rating: 5,
      description:
        "Their developers integrated perfectly with our team. Code quality and documentation were exceptional.",
    },
  ];

  return (
    <div>
      {/* <div className="container mx-auto px-4 flex justify-between items-center mb-12">
        <div className="w-1/2">
          <h3 className="text-[#0D0C0D] text-4xl font-semibold uppercase">
            What Our Customers Say
          </h3>
        </div>
        <Link
          href={"viewBtnLink"}
          className={`w-36 h-10 border-2 border-primary flex items-center justify-center rounded-full  text-lg`}
        >
          View All
        </Link>
      </div> */}
      <h2 className="text-[#0D0C0D] text-4xl font-semibold uppercase text-center mb-12">
        What Our Customers Say
      </h2>

      <div className="space-y-4 sm:space-y-6 overflow-hidden">
        <MarqueeCompo
          direction={"left"}
          pauseOnHover={true}
          items={clientsReviewData}
        />
        <MarqueeCompo
          direction={"right"}
          pauseOnHover={true}
          items={clientsReviewData}
        />
      </div>
    </div>
  );
};

export default ClientStories;
