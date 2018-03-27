import React from "react";
import Body from "../molecules/Body";
import Navigation from "../organisms/Navigation";
import HeroHeader from "../organisms/HeroHeader";
import AllBlogPosts from "../organisms/AllBlogPosts";
import Footer from "../molecules/Footer";

export default () => (
  <Body>
    <Navigation />
    <HeroHeader />
    <AllBlogPosts />
    <Footer />
  </Body>
);
