import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Find from '@/views/find';
import Destination from '@/views/destination';
import Food from '@/views/food';
import Trip from '@/views/trip';
import Theme from '@/views/theme';
const Com = () => (
  <div className = "container">
    <Switch>
      <Route path = "/finds/theme" component = { Theme } /> 
      <Route path = "/finds/trip" component = { Trip } /> 
      <Route path = "/finds/food" component = { Food } /> 
      <Route path = "/finds/destination" component = { Destination } />
      {/* <Redirect to = "/find" /> */}
    </Switch>
  </div>
)

export default Com;