import { combineReducers } from "redux";
import NavigationReducer from "../components/organisms/Navigation/reducer-navigation";

export const allReducers = combineReducers({
  isNavOpen: NavigationReducer
});

export default allReducers;
