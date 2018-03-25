import React, { Component } from "react";
import Paper from "material-ui/Paper";
import FontIcon from "material-ui/FontIcon";
import { Image } from "../atoms/Image";
import imageTest from "../../images/stockholm.jpg";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = { shadow: 1 };
  }
  onMouseOver = () => this.setState({ shadow: 5 });
  onMouseOut = () => this.setState({ shadow: 2 });
  render() {
    return (
      <article
        className="card"
        onMouseOver={this.onMouseOver}
        onFocus={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onBlur={this.onMouseOut}
      >
        <a href="/blog/title">
          <Paper className="card__paper" zDepth={this.state.shadow}>
            <Image src={imageTest} alt="Image" />
            <div className="card__content">
              <div className="card__title">
                <h4>How to drive 12 hours in your taxi without being bored</h4>
              </div>
              <div className="card__date">
                <p>28 march, 2018</p>
              </div>
              <div className="card__meta">
                <p className="card__meta__item">
                  <FontIcon className="material-icons">remove_red_eye</FontIcon>
                  <span>5</span>
                </p>
                <p className="card__meta__item">
                  <FontIcon className="material-icons">forum</FontIcon>
                  <span>2</span>
                </p>
              </div>
            </div>
          </Paper>
        </a>
      </article>
    );
  }
}

export default Card;
