const { createMuiTheme } = require("@material-ui/core");

export const THEME = createMuiTheme({
  typography: {
   "fontFamily": `'Arimo', sans-serif`,
   "fontSize": 14,   
   "fontWeightRegular": 400,
   "fontWeightMedium": 700
  }
});