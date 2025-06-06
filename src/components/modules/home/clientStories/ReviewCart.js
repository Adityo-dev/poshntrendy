import Image from "next/image";

function ReviewCart({ item }) {
  return (
    <div className="relative bg-[#FFF5F5] border hover:border-primary p-3 rounded-lg w-[450px] h-60 shadow-lg flex gap-4 cursor-pointer transition-all duration-200">
      {/* Review Product Image */}
      <Image
        src={item?.image}
        width={400}
        height={400}
        alt={item?.name}
        className="w-[150px] h-full rounded-md object-cover"
      />
      <div className="flex flex-col justify-between">
        <div className="relative space-y-1">
          <p className="text-[#FF69B4] text-lg font-medium">{item?.date}</p>
          <p className="text-[#333333]">{item?.description}</p>
        </div>
        {/* Reviewer Info */}
        <div className="space-y-0.5 sm:space-y-1">
          <p className="text-base sm:font-semibold text-[#333333]">
            Name: {item?.name}
          </p>
          <div className="flex items-center">
            {Array.from({ length: item?.rating }, (_, i) => (
              <span key={i} className="text-yellow-400 text-sm">
                ⭐
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCart;
