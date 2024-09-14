import AboutUsHeader from "../_components/AboutUsHeader";
import LeafPattern from "../_components/LeafPattern";
import CountryLocationsList from "../_components/CountryLocationsList";
import AboutUsWorldClassTalentSection from "../_components/AboutUsWorldClassTalentSection";
import AboutUsTheRealDealSection from "../_components/AboutUsTheRealDealSection";
export default function AboutUs() {
  return (
    <div className="relative">
      <LeafPattern className={"left-0 top-[320px]"} />
      <LeafPattern className={"right-[-396px] top-[1621px]"} />
      <AboutUsHeader />
      <AboutUsWorldClassTalentSection />
      <CountryLocationsList />
      <AboutUsTheRealDealSection />
    </div>
  );
}
