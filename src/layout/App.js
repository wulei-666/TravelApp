import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Find from '@/views/find';
import Order from '@/views/order';
import User from '@/views/user';
import hadLogin from '@/views/hadLogin';
import Share from '@/views/share';

const Com = () => (
  <div className = "container">
    <Switch>
      <Route path = "/find" component = { Find } />
      <Route path = "/order" component = { Order } />
      <Route path = "/user/hadLogin" component = { hadLogin } />
      <Route path = "/user" component = { User } />
      <Route path = "/share" component = { Share } />
      <Redirect to = "/find" />
    </Switch>
  </div>
)

export default Com;