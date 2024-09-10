import HomeFeaturesSection from "./_components/Home/HomeFeaturesSection";
import HomeHero from "./_components/Home/HomeHero";
import ViewProjectsSection from "./_components/Home/ViewProjectsSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ViewProjectsSection />
      <HomeFeaturesSection />
    </>
  );
}
