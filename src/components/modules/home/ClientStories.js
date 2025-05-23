import Image from "next/image";

const ClientStories = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frequent Shopper",
      content:
        "This store has completely transformed my shopping experience. The product quality is exceptional and delivery is always on time.",
      rating: 5,
      product: {
        image: "/image/product1.jpg",
        name: "Premium Smartwatch",
        price: "$199.99",
      },
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "First-time Buyer",
      content:
        "I was skeptical about online shopping, but this store proved me wrong. The product matched the description perfectly!",
      rating: 4,
      product: {
        image: "/image/product3.jpg",
        name: "Wireless Earbuds",
        price: "$89.99",
      },
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Loyal Customer",
      content:
        "Their customer service is outstanding. Had an issue with my order and it was resolved within hours.",
      rating: 5,
      product: {
        image: "/image/product11.jpg",
        name: "Travel Backpack",
        price: "$59.99",
      },
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Improved Product section with better image display */}
              <div className="border-t border-gray-100 p-4 bg-gray-50">
                <p className="text-sm text-gray-500 mb-2">Purchased Product:</p>
                <div className="flex items-center">
                  <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.product.image}
                      alt={testimonial.product.name}
                      layout="fill"
                      objectFit="contain"
                      className="hover:scale-105 transition-transform duration-300"
                      quality={100}
                      priority={false}
                    />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-medium text-gray-800 line-clamp-2">
                      {testimonial.product.name}
                    </h5>
                    <p className="text-blue-600 font-semibold mt-1">
                      {testimonial.product.price}
                    </p>
                    <button className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
            View More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientStories;
