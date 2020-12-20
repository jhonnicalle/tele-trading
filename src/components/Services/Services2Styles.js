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
  },
  paragraph: {
    
  },
  carousel: {
    // margin: `0 ${theme.spacing(2)}px`,
    width: '100%',
  },
  paperTeletrading: {
    backgroundColor: '#FFFFFFAA',
    padding: theme.spacing(2),
    // textAlign: 'center',
    margin: '10px 0',
    height: '250px',
    lineHeight: 1.5,
    [theme.breakpoints.down('xs')]: {
      height: '295px',
    },
    [theme.breakpoints.down('450')]: {
      height: '350px',
    },
    [theme.breakpoints.down('325')]: {
      fontSize: '14px',
      height: '360px',
    },
    [theme.breakpoints.down('300')]: {
      fontSize: '14px',
      // height: '350px',
    },
  },
  paperBox: {
    backgroundColor: '#FFFFFFAA',
    padding: theme.spacing(2),
    // textAlign: 'center',
    marginTop: '10px',
    height: '300px',
    lineHeight: 1.5,
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      height: '320px',
    },
    [theme.breakpoints.down('550')]: {
      // fontSize: '13px',
      height: '400px',
    },
    [theme.breakpoints.down('450')]: {
      fontSize: '13px',
      height: '420px',
    },
    [theme.breakpoints.down('325')]: {
      fontSize: '12px',
      height: '500px',
    },
    [theme.breakpoints.down('300')]: {
      fontSize: '14px',
      // height: '350px',
    },
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',    
    boxShadow: "0px 5px 10px -3px rgba(0,0,0,0.5)"
  }
}));