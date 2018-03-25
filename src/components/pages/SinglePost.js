import React from "react";
import Body from "../molecules/Body";
import Navigation from "../organisms/Navigation";
import Post from "../organisms/Post";
import ReplyMaker from "../organisms/ReplyMaker";
import Replies from "../organisms/Replies";
import Footer from "../molecules/Footer";

export default () => (
  <Body>
    <Navigation />
    <Post />
    <ReplyMaker />
    <Replies />
    <Footer />
  </Body>
);
