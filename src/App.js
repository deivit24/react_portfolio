import React from 'react';
import {makeStyles, Grid, Container} from '@material-ui/core'

import Card from './components/Card'

import NavTabs from './components/NavTabs'
import './App.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const App = () => {
 
  return (
    
   <div id="App" >
    <Container fixed>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={4}>
        <Card username='deivit24'/>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <NavTabs />
      </Grid>
      </Grid>
    </Container>
   </div>
    
  );
}

export default App;
