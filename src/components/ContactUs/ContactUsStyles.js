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
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {    
    borderRadius: '20px',
    margin: '0 5px'
  },
  snackbar: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));