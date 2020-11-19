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
    height: '100%',
    color: theme.palette.text.primary,
    [theme.breakpoints.down('xs')]: {
      height: 'auto'
    },
  },
  // grid: {
  //   [theme.breakpoints.down('xs')]: {
  //     padding: '20px 0px'
  //   },
  // },
  gridItem: {
    [theme.breakpoints.down('xs')]: {
      margin: '5px',
    },
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    borderRadius: '20px',
    margin: theme.spacing(1)
  },
  // snackbar: {
  //   width: '100%',
  //   '& > * + *': {
  //     marginTop: theme.spacing(2),
  //   },
  // },
}));