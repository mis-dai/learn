import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Foods from './app/pages/foods.jsx'
import Echarts from './app/echarts/echarts.jsx'
import Sports from './app/pages/sports/index.jsx';


export default () => {
  return(
      <Switch>
          <Route exact path='/' component={Echarts}/>
          <Route path='/foods' component={Foods}/>
          <Route path='/sports' component={Sports}/>
      </Switch>
  )
}

