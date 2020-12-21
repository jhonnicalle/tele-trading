const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,    
  },
  titleGuarantee: {
    padding: theme.spacing(2),
    
  },
  paragraph: {
    padding: theme.spacing(2),
  },
  paper: {
    backgroundColor: '#FFFFFFE0',
    // textAlign: 'center',
    lineHeight: 1.5,
    color: theme.palette.text.primary,
    [theme.breakpoints.up('lg')]: {
      fontSize: "20px",
      height: '320px',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: "18px",
      height: '280px',
    },
    [theme.breakpoints.down('1100')]: {
      fontSize: "16px",
      // height: '280px',
    },
    [theme.breakpoints.down('490')]: {
      fontSize: "14px",
      // height: '280px',
    },
    [theme.breakpoints.down('400')]: {
      fontSize: "12px",
      // height: '280px',
    },
  },
  carousel: {
    margin: `0 ${theme.spacing(2)}px`,
  },
  button: {    
    borderRadius: '20px',
    margin: '0 5px'
  },
}));