import { combineReducers } from "redux";
import isNavOpen from "../components/organisms/Navigation/reducer-navigation";
import currentUser from "../components/organisms/LoginForm/reducer-loginForm";
import users from "./reducer-users";
import posts from "./reducer-posts";

export default combineReducers({
  currentUser,
  isNavOpen,
  users,
  posts
});
