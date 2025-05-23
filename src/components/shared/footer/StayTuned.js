import SubscriptionForm from "./SubscriptionForm";

function StayTuned() {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-12">
      <div className="col-span-7">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 49"
            fill="none"
            className="w-12 h-12"
          >
            <path
              d="M5.53846 8.23242C2.48123 8.23242 0 10.7137 0 13.7709V35.9247C0 38.982 2.48123 41.4632 5.53846 41.4632H42.4615C45.5188 41.4632 48 38.982 48 35.9247V13.7709C48 10.7137 45.5188 8.23242 42.4615 8.23242H5.53846ZM5.53846 11.9247H42.4615C43.4788 11.9247 44.3077 12.7537 44.3077 13.7709V14.694L24 25.6564L3.69231 14.694V13.7709C3.69231 12.7537 4.52123 11.9247 5.53846 11.9247ZM3.69231 15.2127L15.7495 24.617L3.92308 36.7333L18.3471 26.4632L24 30.0983L29.6548 26.4632L44.0769 36.7333L32.2505 24.617L44.3077 15.2127V35.9247C44.2975 36.209 44.2183 36.4865 44.0769 36.7333C43.7723 37.3333 43.1797 37.7709 42.4615 37.7709H5.53846C4.82031 37.7709 4.22769 37.3352 3.92308 36.7333C3.78201 36.4871 3.70282 36.2084 3.69231 35.9247V15.2127Z"
              fill="black"
            />
          </svg>
          <h5 className="text-[#000] text-2xl font-medium uppercase">
            Stay Tuned
          </h5>
        </div>
        <p className="text-[#605F5F] text-lg mt-1">
          Don’t miss the opportunity to get daily updates on all that’s new at
          Posh N Trendy
        </p>
      </div>
      <div className="col-span-5">
        <SubscriptionForm />
      </div>
    </div>
  );
}

export default StayTuned;
