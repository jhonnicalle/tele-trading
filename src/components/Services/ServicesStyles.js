const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,    
  },
  titleContact: {
    padding: theme.spacing(2),
    color: "#FFFFF1"
  },
  paper: {
    backgroundColor: '#FFFFFFAA',
    padding: theme.spacing(2),
    textAlign: 'center',
    height: `calc(100% - ${theme.spacing(2)}px)`,
    color: theme.palette.text.primary,
  },
  card: {
    backgroundColor: theme.palette.text.primary,
    color: '#FFFFFFAA',
    border: '1px solid black',
    borderRadius: 10
  },
  divider: {
    backgroundColor: '#e6e6e61f'
  }
}));