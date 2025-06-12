import Link from "next/link";

function CollectionShowcaseHeader({
  title,
  description,
  viewBtnLink,
  viewBtnText,
  isGradient,
}) {
  return (
    <div className="flex justify-between mb-12">
      <div className="w-1/2">
        {title && (
          <h3 className="text-[#0D0C0D] text-4xl font-semibold uppercase">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-[#605F5F] text-lg mt-3">{description}</p>
        )}
      </div>
      <Link
        href={viewBtnLink}
        className={`w-36 h-10 border-2 border-primary flex items-center justify-center rounded-full ${
          isGradient ? "bg-primary text-primary-foreground" : "text-[#A5A5A5]"
        } text-lg`}
      >
        {viewBtnText}
      </Link>
    </div>
  );
}

export default CollectionShowcaseHeader;
