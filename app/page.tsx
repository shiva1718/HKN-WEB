import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
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
            <Video/>
            <AboutSectionOne/>
            <AboutSectionTwo/>
            <NuEtaSectionOne/>
            <Members/>
            <Contact/>
        </>
    );
}
