import Marquee from "react-fast-marquee";
import ReviewCart from "./ReviewCart";

function MarqueeCompo({ direction, pauseOnHover, items }) {
  return (
    <Marquee direction={direction} pauseOnHover={pauseOnHover}>
      {items.map((item, index) => (
        <div key={index} className="mr-4 sm:mr-6">
          <ReviewCart item={item} />
        </div>
      ))}
    </Marquee>
  );
}

export default MarqueeCompo;
