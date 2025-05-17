import CopyRights from "./CopyRights";
import Features from "./Features";
import FooterLink from "./FooterLink";

export default function Banner() {
  return (
    <footer className="bg-[#FFE5EC] mt-12">
      <Features />
      <FooterLink />
      <CopyRights />
    </footer>
  );
}
