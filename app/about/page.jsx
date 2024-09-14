import Image from "next/image";
import AboutUsHeader from "../_components/AboutUsHeader";
import AboutUsWorldClassTalent from "../_components/AboutUsWorldClassTalent";
import LeafPattern from "../_components/LeafPattern";
import CountryLocationsList from "../_components/CountryLocationsList";
export default function AboutUs() {
  return (
    <div className="relative">
      <LeafPattern className={"left-0 top-[320px]"} />
      <LeafPattern className={"right-[-396px] top-[1621px]"} />
      <AboutUsHeader />
      <AboutUsWorldClassTalent />
      <CountryLocationsList />
    </div>
  );
}
