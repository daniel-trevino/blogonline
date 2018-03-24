// @flow
export const NAVIGATION_STATUS = "NAVIGATION_STATUS";

export const isOpen = (nav: boolean) => ({
  type: NAVIGATION_STATUS,
  payload: nav
});
