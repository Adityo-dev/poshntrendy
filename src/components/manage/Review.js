const reviews = [
  {
    product: "Floral Summer Dress",
    rating: 5,
    comment: "Love the fit and design!",
  },
  {
    product: "White Sneakers",
    rating: 4,
    comment: "Comfortable but takes time to break in",
  },
];

import { Star as FiStar } from "lucide-react";

function Review() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="font-medium">{review.product}</h3>
            <div className="flex items-center mt-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-700">{review.comment}</p>
            <div className="flex justify-end mt-2 space-x-3">
              <button className="text-sm text-primary hover:text-primary-dark">
                Edit
              </button>
              <button className="text-sm text-red-500 hover:text-red-700">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
