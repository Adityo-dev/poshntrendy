import HeroArrowSlider from "./HeroArrowSlider";

const heroData = [
  { id: 1, image: "/image/heroImage1.png" },
  { id: 3, image: "/image/heroImage3.png" },
  { id: 4, image: "/image/heroImage4.png" },
  { id: 2, image: "/image/heroImage2.png" },
];

function Hero() {
  return (
    <>
      <HeroArrowSlider categoryData={heroData} />
    </>
  );
}

export default Hero;
