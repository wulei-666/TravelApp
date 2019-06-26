import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Find from '@/views/find';
import Destination from '@/views/destination';
// import Food from '@/views/food';
// import Trip from '@/views/trip';
import Order from '@/views/order';
import User from '@/views/user';
import Share from '@/views/share';
import Footer from '@/components/Footer';

const Com = () => (
  <div className = "container">
    <Switch>
      <Route path = "/find" component = { Find } />
      <Route path = "/order" component = { Order } />
      <Route path = "/user" component = { User } />
      <Route path = "/share" component = { Share } />
      <Redirect to = "/find" />
    </Switch>
  </div>
)

export default Com;