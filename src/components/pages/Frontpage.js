import React from "react";
import Body from "../molecules/Body";
import Navigation from "../organisms/Navigation";
import HeroHeader from "../organisms/HeroHeader";
import BlogpostGrid from "../organisms/BlogpostGrid";
import Footer from "../molecules/Footer";

export default () => (
  <Body>
    <Navigation />
    <HeroHeader />
    <BlogpostGrid />
    <Footer />
  </Body>
);