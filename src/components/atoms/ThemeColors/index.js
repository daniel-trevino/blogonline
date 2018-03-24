import {
  amber500,
  amber100,
  amber700,
  indigoA200,
  grey600,
  grey400,
  white,
  grey900,
  fullBlack
} from "material-ui/styles/colors";
import { fade } from "material-ui/utils/colorManipulator";

export default {
  fontFamily: "Roboto, sans-serif",
  palette: {
    primary1Color: amber500,
    primary2Color: amber100,
    primary3Color: amber700,
    accent1Color: indigoA200,
    accent2Color: grey900,
    accent3Color: grey600,
    textColor: grey900,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey400,
    disabledColor: fade(grey900, 0.3),
    pickerHeaderColor: amber500,
    clockCircleColor: fade(grey900, 0.07),
    shadowColor: fullBlack
  }
};
