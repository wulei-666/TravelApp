import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Find from '@/views/find';
import Order from '@/views/order';
import User from '@/views/user';
import Share from '@/views/share';
const Com = () => (
  <div className = "container">
    <Switch>
      <Route path = "/find" component = { Find } />
      <Route path = "/order" component = { Order } />
      <Route path = "/user" component = { User } />
      <Route path = "/share" component = { Share } />
      <Redirect to = "/find" />
    </Switch>
    <footer className = "footer">
      <ul>
        <NavLink to = "/find">
          <span className="iconfont icon-iconfontzhizuobiaozhun07"></span><p>发现</p>
        </NavLink>
        <NavLink to = "/order">
          <span className="iconfont icon-fenxiang"></span><p>分享</p>
        </NavLink>
        <NavLink to = "/share">
          <span className="iconfont icon-icondd1"></span><p>订单</p>
        </NavLink>
        <NavLink to = "/user">
          <span className="iconfont icon-weibiaoti-"></span><p>我的</p>
        </NavLink>
      </ul>
    </footer>
  </div>
)

export default Com;