import Image from "next/image";
import Link from "next/link";

const socialMedia = [
  {
    id: 1,
    icon: "/icons/facebook.png",
    url: "#",
    name: "Facebook",
  },
  {
    id: 2,
    icon: "/icons/instagram.png",
    url: "#",
    name: "Instagram",
  },
  {
    id: 3,
    icon: "/icons/twitter.png",
    url: "#",
    name: "Twitter",
  },
];

function CopyRights() {
  return (
    <div className="py-3.5 bg-[#000]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <p className="text-[#CAC8CA] text-sm">
          Posh N Trendy © 2025, All Rights Reserved
        </p>

        <div className="flex items-center gap-3">
          {socialMedia.map((media) => (
            <Link
              href={media.url}
              key={media.id}
              className="bg-white p-1.5 rounded-full hover:bg-[#E8E8E8] transition-colors shadow"
              aria-label={media.name}
            >
              <Image
                src={media.icon}
                width={24}
                height={24}
                alt={`${media.name} logo`}
                className="w-4 h-4"
              />
            </Link>
          ))}
        </div>

        <div className="text-[#CAC8CA] text-sm">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CopyRights;
