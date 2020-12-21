const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleContact: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  paper: {
    backgroundColor: '#FFFFFFAA',
    padding: theme.spacing(2),
    textAlign: 'center',
    height: `calc(100% - ${theme.spacing(4)}px)`,
    color: theme.palette.text.primary,
    // display: 'block'
  },
  paperInfo: {
    // height: 'auto',
    // display: 'table-cell',
    // verticalAlign: 'middle',
    height: "440px",
    padding: "10px",
    [theme.breakpoints.down('xs')]: {
      height: "380px",
    }

  },
  carousel: {
    height: '100%',
    padding: `0 ${theme.spacing(2)}px`,
    
  },
  grid: {
    [theme.breakpoints.down('xs')]: {
      padding: '20px 0px'
    },
  },
  gridItem: {
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto',
    },
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    borderRadius: '20px',
    margin: theme.spacing(1)
  },
})); // snackbar: {
  //   width: '100%',
  //   '& > * + *': {
  //     marginTop: theme.spacing(2),
  //   },
  // },