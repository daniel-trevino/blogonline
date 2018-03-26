import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import IconButton from "material-ui/IconButton";
import RaisedButton from "material-ui/RaisedButton";
import { logoutRequest } from "../LoginForm/actions-loginForm";
import { Image } from "../../atoms/Image";
import logoImage from "../../../images/Blogonline-logo.png";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props,
      navigationItems: [
        {
          label: this.props.currentUser ? "Dashboard" : "Sign Up",
          href: this.props.currentUser ? "/dashboard" : "/signup"
        },
        {
          label: this.props.currentUser ? "Logout" : "Login",
          href: this.props.currentUser ? "" : "/login"
        }
      ]
    };

    this.clickOutside = this.clickOutside.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
  }
  clickOutside(e) {
    const targetClass = e.target.className;
    // ignore clicks on the component itself
    if (
      targetClass.includes("navigation__menu") ||
      targetClass.includes("form__select") ||
      targetClass.includes("")
    ) {
      return;
    }

    this.clickHandler(e);
  }
  clickHandler(e) {
    e.preventDefault();
    if (!this.state.isNavOpen) {
      document.addEventListener("click", this.clickOutside, false);
      this.props.setNav(true);
    } else {
      document.removeEventListener("click", this.clickOutside, false);
      this.props.setNav(false);
    }
  }
  logoutHandler() {
    logoutRequest(this.state.currentUser).then(res => {
      if (!res) {
        this.props.setUser(res);
        this.props.history.push("/login");
      }
      return false;
    });
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
              {this.state.navigationItems.map(item => (
                <li className="menuList__item" key={item.href}>
                  <RaisedButton
                    className="btn"
                    label={item.label}
                    secondary
                    href={item.href}
                    onClick={
                      this.state.currentUser && !item.href
                        ? this.logoutHandler
                        : undefined
                    }
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
  setNav: undefined
};

Navigation.propTypes = {
  setNav: PropTypes.func
};

export default withRouter(Navigation);
