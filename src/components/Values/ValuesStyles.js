const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  bigTitle: {
    padding: theme.spacing(2),
  },
  titleCard: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary
  },
  paper: {
    backgroundColor: '#FFFFFFAA',
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
  paragraph: {
    padding: theme.spacing(2),
  },
  header: {
    // display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    // backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 300,
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
  },
}));