const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    flexGrow: 1,
    borderRadius: 20
  },
  bigTitle: {
    padding: theme.spacing(2),
    color: "#FFFFF1",
  },
  title: {
    padding: theme.spacing(2),
    color: "#FFFFF1",
    fontSize: 16
  },
  paper: {
    backgroundColor: '#FFFFFFAA',
    // padding: theme.spacing(2),
    textAlign: 'center',
    height: '100%',
    color: theme.palette.text.primary,
    borderRadius: 20
  },
  card: {
    backgroundColor: '#FFFFFFAA',
    color: theme.palette.text.primary ,
    border: '1px solid black',
    borderRadius: 10
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 300,
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
  },
}));