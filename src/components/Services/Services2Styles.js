import { Height } from "@material-ui/icons";

const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    borderRadius: 15
  },
  bigTitle: {
    padding: theme.spacing(2),
  },
  title: {
    padding: theme.spacing(2),
    fontSize: 20
  },
  titleCard: {
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
    fontSize: 16
  },
  

  card: {
    color: theme.palette.text.primary ,
    
    // display: 'table',
    // width: '100%'
  },
  paragraph: {
    
  },
  carousel: {
    // margin: `0 ${theme.spacing(2)}px`,
    width: '100%',
    
  },
  paper: {
    backgroundColor: '#FFFFFFAA',
    padding: theme.spacing(2),
    // textAlign: 'center',
    marginTop: '10px',
    height: '250px',
    
    // display: 'table-cell',
    // verticalAlign: 'middle',
    // width: '100%'
  },
  visit: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  demo: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',    
    boxShadow: "0px 5px 10px -3px rgba(0,0,0,0.5)"
  }
}));