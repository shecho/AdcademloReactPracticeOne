import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const BOTON = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Button color="primary">
          <AddIcon/>
          Agregar
      </Button>
    
      
    </div>
  );
}
 
export default BOTON;

