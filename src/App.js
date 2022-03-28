import React, { useEffect } from 'react';
import Login from './components/login';
import Payment from './components/Payment';
import FandQ from './components/FandQ';
import Product from './components/product';
import Store from './components/store';
import Homepage from './components/homepage';
import Error from './components/Error';
import Loadingscreen from './components/Loadingscreen';
import {Route, Switch} from "react-router-dom";
import { useHistory } from 'react-router-dom';

const App = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('page') === '/store') {
      history.push('/store')
    } else {
      history.push('/')
    }
  })
  return (
    <>
    <Loadingscreen/>
    <Switch>
      <Route exact path='/store' component={Store}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/support' component={FandQ}/>
      <Route exact path='/payment' component={Payment}/>
      <Route exact path='/product' component={Product}/>
      <Route exact path='/' component={Homepage}/>
      <Route component={Error}/>
    </Switch>
    </>
  )
}

export default App