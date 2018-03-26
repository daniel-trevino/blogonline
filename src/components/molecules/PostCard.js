import React, { Component } from "react";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import Paper from "material-ui/Paper";
import FontIcon from "material-ui/FontIcon";
import DeleteModal from "../molecules/DeleteModal";
import { Image } from "../atoms/Image";
import imageTest from "../../images/stockholm.jpg";

class PostCard extends Component {
  state = {
    shadow: 1,
    deleteModal: false
  };

  onMouseOver = () => this.setState({ shadow: 5 });
  onMouseOut = () => this.setState({ shadow: 2 });
  onClickDelete = () => this.setState({ deleteModal: true });
  closeHandleDelete = () => this.setState({ deleteModal: false });
  deleteHandle = () => this.setState({ deleteModal: false });
  render() {
    return (
      <article
        className="postCard"
        onMouseOver={this.onMouseOver}
        onFocus={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onBlur={this.onMouseOut}
      >
        <Paper className="postCard__paper" zDepth={this.state.shadow}>
          <div className="postCard__menu">
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              anchorOrigin={{ horizontal: "right", vertical: "top" }}
              targetOrigin={{ horizontal: "left", vertical: "top" }}
            >
              <MenuItem primaryText="Edit" />
              <MenuItem primaryText="Delete" onClick={this.onClickDelete} />
            </IconMenu>
          </div>
          <a href="/title">
            <Image src={imageTest} alt="Image" />
            <div className="postCard__content">
              <div className="postCard__title">
                <h4>How to drive 12 hours in your taxi without being bored</h4>
              </div>
              <div className="postCard__date">
                <p>28 march, 2018</p>
              </div>
              <div className="postCard__meta">
                <p className="postCard__meta__item">
                  <FontIcon className="material-icons">remove_red_eye</FontIcon>
                  <span>5</span>
                </p>
                <p className="postCard__meta__item">
                  <FontIcon className="material-icons">forum</FontIcon>
                  <span>2</span>
                </p>
              </div>
            </div>
          </a>
        </Paper>
        <DeleteModal
          {...this.state}
          closeHandleDelete={this.closeHandleDelete}
          deleteHandle={this.deleteHandle}
        />
      </article>
    );
  }
}

export default PostCard;
