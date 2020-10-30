const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    
    borderRadius: 15
  },
  bigTitle: {
    padding: theme.spacing(2),
    // color: "#FFFFF1",
  },
  title: {
    padding: theme.spacing(2),
    // color: "#FFFFF1",
    fontSize: 20
  },
  titleCard: {
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
    fontSize: 16
  },
  paper: {
    backgroundColor: '#FFFFFF00',
    opacity: 1, 
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  card: {
    
    color: theme.palette.text.primary ,
  },
  paragraph: {
    
  }
}));