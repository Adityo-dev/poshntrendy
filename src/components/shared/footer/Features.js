import Services from "./Services";
import StayTuned from "./StayTuned";

function Features() {
  return (
    <div className="relative">
      <div className="absolute -top-12 left-0 right-0">
        <Services />
      </div>
      <StayTuned />
    </div>
  );
}

export default Features;
