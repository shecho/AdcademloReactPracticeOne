import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import BOTON from '../Button-component/Buton-component' 
import Search from '../search-user-component/Search-user-component'
import './add-user-.component.css'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div className="form-container">
         <form className={classes.root} noValidate autoComplete="off">
      
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        
        </form>
        <BOTON/>
        <Search/>
    </div>
  );
}
