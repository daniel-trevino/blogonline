import React from "react";
import PostCard from "../molecules/PostCard";

export default props => (
  <div className="blogpostGrid">
    <div className="blogpostGrid__title">
      <h3>{props.title}</h3>
    </div>
    <div className="blogpostGrid__content">
      <div className="container">
        <div className="row">
          {props.data.map((post, i) => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={i}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
