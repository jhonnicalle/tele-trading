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
    textAlign: 'center',
    lineHeight: 1.5,
    // height: '250px',
    // display: 'table-cell',
    // verticalAlign: 'middle',
    color: theme.palette.text.primary,
    // '@media screen and (max-width:1200px)': {
    //   fontSize: '25px',
    //   height: '320px',
    // },
    // [theme.typography.fontSize.up('md')]: {
    //   fontSize: '25px',
    //   height: '320px',
    // },
    // [theme.typography]: {
    //   [theme.breakpoints.up('md')]: {
    //     fontSize: "25px"
    //   },
    // },
    [theme.breakpoints.up('lg')]: {
      fontSize: "20px",
      height: '320px',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: "18px",
      height: '300px',
    },
    [theme.breakpoints.down('1100')]: {
      fontSize: "16px",
      height: '280px',
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