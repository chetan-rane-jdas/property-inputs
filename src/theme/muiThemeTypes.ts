import { Theme } from "@material-ui/core/styles";
import { Palette } from "@material-ui/core/styles/createPalette";
import { Color } from "@material-ui/core";

export interface JDAThemePalette extends Palette {
  red: Color;
  pink: Color;
  purple: Color;
  cornflower: Color;
  byDarkBlue: Color;
  byBlue: Color;
  blue: Color;
  teal: Color;
  green: Color;
  lime: Color;
  yellow: Color;
  orange: Color;
  blueGrey: Color;
  darkBlueGrey: Color;
  grey: Color;
}
export interface JDAThemeType extends Theme {
  palette: JDAThemePalette;
}
