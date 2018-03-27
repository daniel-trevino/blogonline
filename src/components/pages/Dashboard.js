import React from "react";
import Body from "../molecules/Body";
import Navigation from "../organisms/Navigation";
import PostMaker from "../organisms/PostMaker";
import PersonalBlogPosts from "../organisms/PersonalBlogPosts";
import Footer from "../molecules/Footer";

export default () => (
  <Body>
    <Navigation />
    <PostMaker />
    <PersonalBlogPosts />
    <Footer />
  </Body>
);
