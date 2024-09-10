import React from "react";
import LocationCard from "./LocationCard";
import SectionWrapper from "./SectionWrapper";

import MobileUK from "@/public/locations/desktop/image-map-united-kingdom.png";
import TabletUK from "@/public/locations/tablet/image-map-uk.png";

import MobileAustralia from "@/public/locations/desktop/image-map-australia.png";
import TabletAustralia from "@/public/locations/tablet/image-map-australia.png";

import MobileCanada from "@/public/locations/desktop/image-map-canada.png";
import TabletCanada from "@/public/locations/tablet/image-map-canada.png";

const Locations = [
  {
    location: "Canada",
    office: "Designo Central Office",
    address: "3886 Wellington Street Toronto, Ontario M9C 3J5",
    email: "contact@designo.au",
    phoneNumber: "+1 253-863-8967",
    mobileImage: MobileCanada,
    tabletImage: TabletCanada,
  },
  {
    location: "Australia",
    office: "Designo AU Office",
    address: "19 Balonne Street New South Wales 2443",
    email: "contact@designo.co",
    phoneNumber: "(02) 6720 9092",
    mobileImage: MobileAustralia,
    tabletImage: TabletAustralia,
    reverse: true,
  },
  {
    location: "United Kingdom",
    office: "Designo UK Office",
    address: "13  Colorado Way Rhyd-y-fro SA8 9GA",
    email: "contact@designo.co",
    phoneNumber: "078 3115 1400",
    mobileImage: MobileUK,
    tabletImage: TabletUK,
  },
];
export default function LocationsList() {
  return (
    <SectionWrapper fullWidthMobile={true}>
      {Locations.map((location) => (
        <LocationCard
          key={location.location}
          location={location.location}
          office={location.office}
          address={location.address}
          email={location.email}
          phoneNumber={location.phoneNumber}
          MobileImage={location.mobileImage}
          TabletImage={location.tabletImage}
          reverse={location?.reverse}
        />
      ))}
    </SectionWrapper>
  );
}
