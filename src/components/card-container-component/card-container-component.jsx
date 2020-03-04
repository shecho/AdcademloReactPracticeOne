import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './card-container-component.css'
import OutlinedCard from '../card-component/card-component'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const CardContainer = () => {
    const classes = useStyles();
    return  (
        <div className={classes.root}>
          <Grid container spacing={6}>
          
 
            <Grid item xs={10} sm={3} >
                <Paper className="{classes.paper} card-container">

                <OutlinedCard/>
                  
                </Paper>
            </Grid>
          </Grid>
        </div>
      );
}
 
export default CardContainer;

