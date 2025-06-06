import Image from "next/image";

function ReviewCart({ item }) {
  return (
    <div className="relative bg-[#113955] px-4 sm:p-3 rounded-lg w-[350px] sm:w-[450px] h-52 sm:h-60 shadow-lg flex gap-4 cursor-pointer">
      <Image
        src={item?.image}
        width={400}
        height={400}
        alt={item?.name}
        className="w-[150px] h-full rounded-md object-cover"
      />
      <div>
        {/* Review Content */}
        <div className="relative space-y-2">
          <p className="text-[#0D99FF] sm:text-lg font-medium">{item?.date}</p>
          <p className="text-[#F7FDFF] text-sm sm:text-base sm:leading-6">
            {item?.description}
          </p>
        </div>
        {/* Reviewer Info */}
        <div className="flex items-center gap-4 mt-4">
          <div className="space-y-0.5 sm:space-y-1">
            <p className="text-sm sm:text-base sm:font-semibold text-white">
              {item?.name}
            </p>
            <p className="text-gray-300 text-xs sm:text-sm">
              {item?.designation}
            </p>
            <div className="flex items-center">
              {Array.from({ length: item?.rating }, (_, i) => (
                <span key={i} className="text-yellow-400 text-xs sm:text-sm">
                  ⭐
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quotation Icon */}
      <div className="absolute bottom-6 right-6 flex gap-1">
        {/* <Image
          src="/image/inverted-comma.png"
          width={16}
          height={28}
          alt="Quote"
          className="w-4 sm:w-6 h-6 sm:h-10"
        />
        <Image
          src="/image/inverted-comma.png"
          width={16}
          height={28}
          alt="Quote"
          className="w-4 sm:w-6 h-6 sm:h-10"
        /> */}
      </div>
    </div>
  );
}

export default ReviewCart;
