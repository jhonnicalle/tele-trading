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
  paper: {
    backgroundColor: '#FFFFFFAA',
    padding: theme.spacing(2),
    textAlign: 'center',
    margin: "0 20px",
    marginTop: '10px'
  },
  card: {
    color: theme.palette.text.primary ,
  },
  paragraph: {
    
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',    
    boxShadow: "0px 5px 10px -3px rgba(0,0,0,0.5)"
  }
}));