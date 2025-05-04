import Image from "next/image";

function HomePageBanner1() {
  return (
    <section className="bg-[#FBF9FB]">
      <div className="container mx-auto px-4 flex items-center gap-7 py-24">
        <Image
          src={"/image/HomePageBanner1.1.png"}
          width={600}
          height={600}
          alt=""
          className="w-full max-h-[440px] object-cover rounded-3xl"
        />
        <Image
          src={"/image/HomePageBanner1.2.png"}
          width={600}
          height={600}
          alt=""
          className="w-full max-h-[440px] object-cover rounded-3xl"
        />
      </div>
    </section>
  );
}

export default HomePageBanner1;
