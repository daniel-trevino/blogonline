import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import PostCard from "../molecules/PostCard";

export default () => (
  <div className="blogpostGrid">
    <div className="blogpostGrid__title">
      <h3>Latest from the Blog</h3>
    </div>
    <div className="blogpostGrid__content">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <PostCard />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <PostCard />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <PostCard />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <PostCard />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <PostCard />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <PostCard />
          </div>
        </div>
      </div>
      <RaisedButton label="Load more" primary />
    </div>
  </div>
);
