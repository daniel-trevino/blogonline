import React from "react";
import ReplyCard from "../molecules/ReplyCard";

export default () => (
  <div className="replies container">
    <div className="replies__title">
      <h3>Comments (2)</h3>
    </div>
    <div className="replies__item">
      <ReplyCard />
    </div>
    <div className="replies__item">
      <ReplyCard />
    </div>
  </div>
);
