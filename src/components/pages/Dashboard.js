import React from "react";
import Body from "../molecules/Body";
import Navigation from "../organisms/Navigation";
import PostMaker from "../organisms/PostMaker";
import BlogpostGrid from "../organisms/BlogpostGrid";
import Footer from "../molecules/Footer";

export default () => (
  <Body>
    <Navigation />
    <PostMaker />
    <BlogpostGrid />
    <Footer />
  </Body>
);
