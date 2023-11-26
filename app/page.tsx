import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "components/Event";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Members from "@/app/members/page";
import Video from "@/components/Video";
import { Metadata } from "next";
import NuEtaSectionOne from "@/components/NuEta/NuEtaSectionOne";

export const metadata: Metadata = {
  title: "SEC IEEE HKN",
  description: "SEC IEEE HKN Description",
  // other metadata
};

export default function Home() {
    return (
        <>

            <ScrollUp/>
            <Hero/>
            {/*<Features />*/}
            <Video/>

            {/*<Brands />*/}
            <AboutSectionOne/>
            <AboutSectionTwo/>
            <NuEtaSectionOne/>
            <Members/>
            {/*<Pricing />*/}
            {/*<Event />*/}
            <Contact/>
        </>
    );
}
