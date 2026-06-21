import AdditionalSection from "../components/AdditionalSection";
import FeaturedSection from "../components/FeaturedSection";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className="page-main">
      <HeroSection />
      <FeaturedSection />
      <AdditionalSection />
    </main>
  );
}
