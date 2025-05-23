import CopyRights from "./CopyRights";
import FooterLink from "./FooterLink";
import StayTuned from "./StayTuned";

export default function Banner() {
  return (
    <footer className="bg-[#FFE5EC]">
      <StayTuned />
      <FooterLink />
      <CopyRights />
    </footer>
  );
}
