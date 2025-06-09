import BestSellers from "@/components/modules/home/BestSellers";
import Brands from "@/components/modules/home/brands/Brands";
import Categories from "@/components/modules/home/categories/Categories";
import ClientStories from "@/components/modules/home/clientStories/ClientStories";
import FestiveCollections from "@/components/modules/home/FestiveCollections";
import Hero from "@/components/modules/home/hero/Hero";
import NewArrivals from "@/components/modules/home/NewArrivals";
import SalesOngoing from "@/components/modules/home/SalesOngoing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <NewArrivals />
      <BestSellers />
      <FestiveCollections />
      <ClientStories />
      <SalesOngoing />
      <Brands />
    </main>
  );
}
