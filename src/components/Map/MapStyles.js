const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  titleContact: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  map :{
    width: '100%',
    height: '60vh',
    padding: `${theme.spacing(2)}px 0`,
  }
}));