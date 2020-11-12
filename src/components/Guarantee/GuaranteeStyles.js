const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,    
  },
  titleGuarantee: {
    padding: theme.spacing(2),
    // color: "#FFFFF1"
  },
  paragraph: {
    padding: theme.spacing(2),
    
  },
  paper: {
    backgroundColor: '#FFFFFF00',
    textAlign: 'center',
    // height: `calc(100% - ${theme.spacing(2)}px)`,
    color: theme.palette.text.primary,
  },
  carousel: {
    margin: theme.spacing(2),
    
  },
  button: {    
    borderRadius: '20px',
    margin: '0 5px'
  },
}));