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
    height: '250px',
    display: 'table-cell',
    verticalAlign: 'middle',
    color: theme.palette.text.primary,
    [theme.breakpoints.down('xs')]: {
      height: '295px',
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