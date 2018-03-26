// @flow
export const NAVIGATION_STATUS = "NAVIGATION_STATUS";

export const isNavOpen = (nav: boolean): Object => ({
  type: NAVIGATION_STATUS,
  payload: nav
});
