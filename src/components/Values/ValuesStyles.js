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
    // textAlign: 'center',
    color: theme.palette.text.primary,
    // borderRadius: 20,
    padding: theme.spacing(2),
    // textAlign: 'center',
    // marginTop: '10px',
    height: '250px',
    lineHeight: 1.5,
    [theme.breakpoints.up('lg')]: {
      fontSize: "20px",
      // height: '320px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      // height: '320px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      // height: '320px',
    },
    [theme.breakpoints.down('550')]: {
      // fontSize: '13px',
      height: '300px',
    },
    [theme.breakpoints.down('450')]: {
      // fontSize: '13px',
      // height: '420px',
    },
    [theme.breakpoints.down('400')]: {
      fontSize: '12px',
      // height: '420px',
    },
    [theme.breakpoints.down('350')]: {
      fontSize: '12px',
      height: '350px',
    },
    [theme.breakpoints.down('300')]: {
      // fontSize: '14px',
      // height: '350px',
    },
  },
  card: {
    backgroundColor: '#FFFFFFAA',
    color: theme.palette.text.primary ,
    border: '1px solid black',
    borderRadius: 10
  },
  paragraph: {
    // padding: theme.spacing(2),
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