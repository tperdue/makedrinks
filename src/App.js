import React from 'react';
import './CSS/App.css';
import { Provider } from 'react-redux';
import store from './redux-store/store';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Router } from "@reach/router"
import AppBar from './tim-components/AppBar';
import ResponsiveDrawer from './tim-components/ResponsiveDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from './tim-components/Login';
import Content from './tim-components/Content';
import Home from './tim-components/Home';
import SearchPage from './tim-components/SearchPage';
import theme from './theme';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>


      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className={classes.root} >

          <AppBar />
          <ResponsiveDrawer />
          <Content>

            <Router>
              <Home path="/" />
              <Login path="/login" />



            </Router>

          </Content>
        </div>
      </ThemeProvider>



    </Provider>
  );
}

export default App;