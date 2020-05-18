// =========================================================================================================
//                      Copyright <1995-2020> JDA Software Group, Inc. All rights reserved.
//                      LICENSE OF THIS PROGRAM IS ONLY ENTITLED TO ACCESS THE CONFIGURATION(S) SPECIFIED IN ITS
//                      SOFTWARE LICENSE AGREEMENT WITH JDA.  ACCESS OF ANY OTHER CONFIGURATION IS A DIRECT VIOLATION
//                      OF THE TERMS OF THE SOFTWARE LICENSE AGREEMENT, AND JDA RETAINS ALL ITS LEGAL RIGHTS TO ENFORCE
//                      SUCH AGREEMENT.
//                      This product may be protected by one or more United States and foreign patents.
//                      For information on patents, see https://www.jda.com/legal/patents.
// =========================================================================================================
import React from "react";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import merge from "lodash/merge";
import { ThemeProvider } from "@material-ui/styles";

import palette from "./palette";

const defaultTheme = createMuiTheme({
  spacing: 4,
});
const tabWidth = defaultTheme.spacing(3);

const JDATheme = createMuiTheme({
  palette,
  spacing: 4,
  typography: {
    fontSize: "0.875rem",
    lineHeight: "1.3745rem",
    h1: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "1.875rem", //30px
      lineHeight: "3.57rem",
      fontWeight: 700,
    },
    h2: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "1.5rem", //24px
      lineHeight: "3rem",
      fontWeight: 500,
    },
    h3: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "1.125rem", //18px
      lineHeight: "1.3125rem", //21px
      fontWeight: 500,
    },
    h4: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "1rem", //16px
      lineHeight: "2.14rem",
      fontWeight: 500,
    },
    h5: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "0.875rem", //14px
      lineHeight: "1rem",
      fontWeight: 500,
    },
    h6: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "0.75rem", //12px
      lineHeight: "1.57rem",
      fontWeight: 700,
      textTransform: "capitalize",
    },
    subtitle1: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "0.857rem", //14px
      lineHeight: "1.428rem",
      fontWeight: 700,
      textTransform: "capitalize",
    },
    subtitle2: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "0.857rem",
      lineHeight: "1.428rem",
      fontWeight: 400,
    },
    body1: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "0.875rem", //14px
      lineHeight: "1.57rem",
      fontWeight: 400,
    },
    body2: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "0.75rem", //12px
      lineHeight: "1rem",
      fontWeight: 400,
      color: palette.darkBlueGrey[800],
    },
    caption: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "0.75rem", //12px
      lineHeight: "1rem",
      fontWeight: 400,
      color: palette.grey[600],
    },
    button: {
      fontSize: "1rem", //16px
      lineHeight: "1.2rem",
    },
  },
  overrides: {
    MuiContainer: {
      maxWidthXl: {
        paddingLeft: defaultTheme.spacing(1),
        paddingRight: defaultTheme.spacing(1),
      },
    },
    MuiPaper: {
      root: {
        border: "none",
        padding: defaultTheme.spacing(1.5),
        margin: defaultTheme.spacing(1),
      },
      outlined: {
        border: "none",
        padding: 0,
        margin: 0,
        borderBottomStyle: "solid",
        borderBottomWidth: ".5px",
        borderBottomColor: palette.grey[600],
      },
    },
    MuiAppBar: {
      root: {
        backgroundColor: palette.primary.contrastText,
        margin: defaultTheme.spacing(1),
      },
    },
    MuiBox: {
      root: {
        padding: 0,
      },
    },
    MuiInput: {
      fontSize: ".625rem",
    },
    MuiInputBase: {
      input: {
        fontSize: "0.875rem",
      },
      inputMarginDense: {
        padding: defaultTheme.spacing(0.2),
      },
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiTypography: {
      colorTextPrimary: {
        color: palette.primary.textColor,
      },
    },
    MuiListItem: {
      root: {
        paddingTop: 0,
        paddingBottom: 0,
        "&$selected": {
          backgroundColor: `${palette.byBlue[50]} !important`,
        },
      },
      button: {
        "&:hover": {
          backgroundColor: `${palette.byBlue[50]} !important`,
          fontWeight: "bold",
        },
      },
      container: {
        font: "Roboto Condensed",
        color: palette.grey[600],
        fontSize: "1rem",
        "&:hover": {
          "& span": {
            fontWeight: "500",
            color: palette.blue[800],
          },
        },
      },
    },
    PrivateSwitchBase: {
      root: {
        padding: defaultTheme.spacing(0.25),
      },
    },
    MuiIconButton: {
      root: {
        padding: defaultTheme.spacing(1),
        color: palette.grey[400],
        fontSize: "1.125rem",
        "&:hover": {
          backgroundColor: "none",
          color: palette.blue[800],
        },
      },
      colorPrimary: {
        color: palette.blue[800],
        "&:hover": {
          backgroundColor: "none",
        },
      },
    },
    MuiIcon: {
      root: {
        color: palette.grey[400],
        fontSize: "1.125rem",
        width: "auto",
        height: "auto",
        paddingLeft: defaultTheme.spacing(0.5),
        paddingRight: defaultTheme.spacing(0.5),
        img: {
          display: "block",
        },
        "&:hover": {
          cursor: "pointer",
          color: palette.byBlue[800],
        },
      },
      colorAction: {
        color: palette.primary.textColor,
        "&:hover": {
          color: "inherit",
        },
      },
      colorPrimary: {
        color: palette.grey[400],
      },
      colorSecondary: {
        color: palette.green[400],
      },
      fontSizeInherit: {
        fontSize: "1.125rem", //18px
      },
      fontSizeSmall: {
        fontSize: "1rem", //16px
      },
      fontSizeLarge: {
        fontSize: "1.5rem", //24px
      },
      colorDisabled: {
        color: palette.grey[400],
      },
    },
    textField: {
      [`& fieldset`]: {
        borderRadius: 0,
      },
    },
    MuiSelect: {
      root: {
        fontSize: "0.875rem",
        width: 110,
        border: `1px solid ${palette.grey[300]}`,
        backgroundColor: palette.primary.contrastText,
        select: {
          border: `1px solid ${palette.grey[300]}`,
          backgroundColor: palette.primary.contrastText,
        },
      },
      selectMenu: {
        borderRadius: "4px",
        backgroundColor: palette.primary.contrastText,
        paddingLeft: 10,
        "&:focus": {
          borderRadius: "4px",
          backgroundColor: palette.primary.contrastText,
        },
      },
    },
    MuiButton: {
      root: {
        "&$disabled": {
          borderRadius: defaultTheme.spacing(0.5),
        },
        borderRadius: defaultTheme.spacing(0.5),
        margin: `${defaultTheme.spacing(1)}px ${defaultTheme.spacing(0.5)}px`,
        fontFamily: ["Roboto Condensed", "Arial", "Arial Narrow", "san serif"],
        fontWeight: 400,
        "&:hover": {
          backgroundColor: "inherit",
        },
      },
      sizeSmall: {
        fontSize: "0.875rem",
        lineHeight: "1.375rem",
        padding: `${defaultTheme.spacing(1)}px ${defaultTheme.spacing(3)}px`,
      },
      sizeLarge: {
        fontSize: "1.125rem",
        lineHeight: "1.625rem",
        padding: `${defaultTheme.spacing(2)}px ${defaultTheme.spacing(5)}px`,
      },
      contained: {
        boxShadow: "none",
        "&$disabled": {
          color: palette.primary.contrastText,
          backgroundColor: palette.grey[40],
          border: 0,
        },
      },
      containedPrimary: {
        color: palette.primary.contrastText,
        backgroundColor: palette.byBlue[800],
        "&:hover": {
          backgroundColor: palette.byBlue[800],
        },
        "&$disabled": {
          color: palette.darkBlueGrey[800],
          border: "none",
          backgroundColor: palette.grey[400],
        },
      },
      outlinedPrimary: {
        background: palette.primary.contrastText,
        color: palette.byBlue[800],
        border: `1px solid ${palette.byBlue[800]}`,
        "&:hover": {
          backgroundColor: "transparent",
          border: `1px solid ${palette.byBlue[800]}`,
        },
        "&$disabled": {
          background: palette.primary.contrastText,
          border: `1px solid ${palette.grey[400]}`,
          color: palette.grey[400],
        },
      },
      outlinedSecondary: {
        borderColor: palette.secondary.main,
        "&:hover": {
          backgroundColor: palette.byBlue[50],
        },
        "&$disabled": {
          color: palette.primary.contrastText,
          backgroundColor: palette.grey[40],
          border: 0,
        },
      },
      textPrimary: {
        color: palette.byBlue[800],
        "&:hover": {
          backgroundColor: "transparent",
        },
        "&$disabled": {
          color: palette.grey[400],
          background: "transparent",
        },
      },
      disabled: {
        color: palette.darkBlueGrey[800],
        border: "none",
        backgroundColor: palette.grey[400],
      },
    },
    MuiButtonGroup: {
      root: {
        borderRadius: defaultTheme.spacing(0.5),
        margin: `${defaultTheme.spacing(1)}px ${defaultTheme.spacing(0.5)}px`,
        fontFamily: ["Roboto Condensed", "Arial", "Arial Narrow", "san serif"],
        fontWeight: 400,
        "&:hover": {
          backgroundColor: "inherit",
        },
      },
      groupedOutlinedHorizontal: {
        background: palette.primary.contrastText,
        color: palette.byBlue[800],
        border: `1px solid ${palette.byBlue[800]}`,
        "&:not(:last-child)": {
          borderRightColor: "none",
          "&:hover": {
            backgroundColor: "transparent",
            border: `1px solid ${palette.byBlue[800]}`,
          },
        },
        "&:not(:first-child)": {
          "&:hover": {
            border: `1px solid ${palette.byBlue[800]}`,
          },
        },
        "&:hover": {
          backgroundColor: "transparent",
          border: `1px solid ${palette.byBlue[800]}`,
        },
        "&$disabled": {
          background: palette.primary.contrastText,
          border: `1px solid ${palette.grey[400]}`,
          color: palette.grey[400],
        },
      },
    },
    MuiTable: {
      root: {
        fontFamily: "Roboto Condensed",
      },
    },
    MuiTableRow: {
      root: {
        borderBottom: `1px solid ${palette.grey[200]}`,
        "&$selected": {
          backgroundColor: palette.byBlue[600],
        },
        "&$hover": {
          "&:hover": {
            backgroundColor: palette.blue[50],
          },
        },
      },
    },
    MuiTableHead: {
      root: {
        borderBottom: `1px solid ${palette.grey[500]}`,
      },
    },
    MuiTableCell: {
      root: {
        fontFamily: "Roboto Condensed",
        borderBottom: 0,
      },
      sizeSmall: {
        padding: `${defaultTheme.spacing(0.5)}px ${defaultTheme.spacing(1)}px`,
      },
    },
    MuiTabs: {
      root: {
        color: palette.grey[600],
        minHeight: 24,
        zIndex: 1000,
        marginBottom: -1,
      },
      indicator: {
        height: 0,
      },
      scrollButtons: {
        color: palette.grey[800],
        width: 16,
      },
    },
    MuiTab: {
      root: {
        color: palette.darkBlueGrey[800],
        fontFamily: ["Roboto Condensed", "Arial", "san-serif"],
        fontSize: "0.875rem !important",
        lineHeight: "1.375rem",
        textTransform: "none",
        fontWeight: 400,
        padding: `0 ${defaultTheme.spacing(1)}px`,
        borderBottom: `1px solid ${palette.grey[300]}`,
        [defaultTheme.breakpoints.up("xs")]: {
          minWidth: defaultTheme.spacing(3),
        },
        "&$selected": {
          color: palette.grey[800],
          fontFamily: ["Roboto Condensed", "Arial", "san-serif"],
          fontWeight: 700,
          borderBottom: `2px solid ${palette.byBlue[800]}`,
          [defaultTheme.breakpoints.up("xs")]: {
            minWidth: defaultTheme.spacing(3),
          },
          "&:hover": {
            color: palette.grey[800],
          },
        },
      },
      textColorInherit: {
        color: palette.darkBlueGrey[800],
        opacity: 1,
        "&:hover": {
          color: palette.byBlue[800],
        },
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: palette.grey[900],
        opacity: 1,
      },
    },
    MuiRadio: {
      root: {
        color: palette.grey[200],
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
      colorSecondary: {
        "&$checked": {
          color: palette.byBlue[800],
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
        "&$disabled": {
          color: palette.grey[200],
        },
      },
    },
    MuiCheckbox: {
      root: {
        color: palette.grey[300],
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
      colorSecondary: {
        "&$checked": {
          color: palette.byBlue[800],
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
        "&$indeterminate": {
          color: palette.byBlue[800],
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
        "&$disabled": {
          color: palette.grey[200],
        },
      },
    },

    MuiInputLabel: {
      asterisk: {
        color: palette.red[500],
      },
    },
    MuiNativeSelect: {
      icon: {
        color: palette.byBlue[800],
        fontSize: "1.25rem",
      },
    },
    MuiLink: {
      root: {
        color: palette.secondary.main,
      },
    },
    MuiInputAdornment: {
      positionEnd: {
        marginLeft: 5,
      },
    },
    MuiTouchRipple: {
      root: {
        display: "none",
      },
    },
    MuiDivider: {
      root: {
        marginTop: "20px",
        marginBottom: "20px",
      },
    },
    MuiSlider: {
      root: {
        color: palette.primary.textColor,
        height: 8,
      },
      thumb: {
        height: 20,
        width: 20,
        backgroundColor: palette.primary.contrastText,
        border: "2px solid currentColor",
        marginTop: -8,
        marginLeft: -12,
      },
      track: {
        height: 5,
        borderRadius: 4,
      },
      rail: {
        height: 3,
        borderRadius: 2,
        color: palette.grey[600],
      },
    },
    MuiDialog: {
      paper: {
        padding: 0,
      },
    },
    MuiDialogTitle: {
      root: {
        padding: defaultTheme.spacing(2),
      },
    },
    MuiCardContent: {
      root: {
        "&:last-child": {
          paddingBottom: defaultTheme.spacing(2),
        },
      },
    },
    MuiToolbar: {
      gutters: {
        [defaultTheme.breakpoints.up("xs")]: {
          paddingLeft: defaultTheme.spacing(4),
          paddingRight: defaultTheme.spacing(4),
        },
      },
    },
  },
});

export const modalStyles = makeStyles((theme) => ({
  modalWindow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    left: "30%",
  },
  modalHead: {
    color: palette.darkBlueGrey[800],
    padding: theme.spacing(1),
    backgroundColor: palette.primary.contrastText,
    borderBottom: `1px solid ${palette.grey[300]}`,
  },
  modalBody: {
    backgroundColor: palette.background.paper,
    padding: theme.spacing(1),
  },
  modalGrid: {
    paddingBottom: theme.spacing(1),
  },
  modalFooter: {
    backgroundColor: palette.background.paper,
    padding: theme.spacing(1),
    borderTop: `1px solid ${palette.grey[300]}`,
  },
  modal: {
    outline: 0,
    borderRadius: theme.spacing(1),
    border: `${theme.spacing(1)}px solid ${palette.background.paper}`,
  },
  modalGrid: {
    paddingBottom: theme.spacing(2),
  },
}));

export default JDATheme;
export const ThemeAsContext = React.createContext(JDATheme);
export function withJDATheme(custom) {
  const finalTheme = merge({}, JDATheme, custom || {});
  return (Component) => {
    return (props) => (
      <ThemeProvider theme={finalTheme}>
        <Component {...props}></Component>
      </ThemeProvider>
    );
  };
}
