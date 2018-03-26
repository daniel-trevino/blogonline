import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import ImageBackground from "../atoms/ImageBackground";
import Image from "../../images/stockholm.jpg";

export default () => (
  <div className="heroHeader">
    <ImageBackground classType="heroHeader__backgroundImage" src={Image} />
    <div className="heroHeader__content">
      <div className="heroHeader__title">
        <h1>Welcome to blogonline!</h1>
        <h2>The place where you can read different taxi stories</h2>
      </div>

      <div className="heroHeader__button-container">
        <RaisedButton
          href="/login"
          className="heroHeader__button"
          label="Create a post"
          primary
        />
      </div>
    </div>
  </div>
);
