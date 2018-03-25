import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "material-ui/IconButton";
import RaisedButton from "material-ui/RaisedButton";
import { Image } from "../../atoms/Image";
import logoImage from "../../../images/Blogonline-logo.png";

const navigationItems = [
  {
    label: "Sign Up",
    href: "/signup"
  },
  {
    label: "Login",
    href: "/login"
  }
];

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props };

    this.clickOutside = this.clickOutside.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
  }
  clickOutside(e) {
    const targetClass = e.target.className;
    // ignore clicks on the component itself
    if (
      targetClass.includes("navigation__menu") ||
      targetClass.includes("form__select")
    ) {
      return;
    }
    this.clickHandler(e);
  }
  clickHandler(e) {
    e.preventDefault();
    if (!this.state.isNavOpen) {
      document.addEventListener("click", this.clickOutside, false);
      this.props.navStatus(true);
    } else {
      document.removeEventListener("click", this.clickOutside, false);
      this.props.navStatus(false);
    }
  }
  render() {
    return (
      <header className="navigation">
        <div className="navigation__container">
          <div className="navigation__logo">
            <a href="/">
              <Image alt="Blogonline Logo" src={logoImage} />
            </a>
          </div>
          <div
            className={`navigation__menu ${
              this.state.isNavOpen ? "navigation__menu--active" : ""
            }`}
          >
            <ul className="menuList">
              {navigationItems.map(item => (
                <li className="menuList__item" key={item.href}>
                  <RaisedButton
                    className="btn"
                    label={item.label}
                    secondary
                    href={item.href}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <IconButton
          className="navigation__hamburger"
          iconClassName="material-icons"
          onClick={this.clickHandler}
        >
          <i>{this.state.isNavOpen ? "close" : "menu"}</i>
        </IconButton>
      </header>
    );
  }
}

Navigation.defaultProps = {
  navStatus: undefined
};

Navigation.propTypes = {
  navStatus: PropTypes.func
};

export default Navigation;
