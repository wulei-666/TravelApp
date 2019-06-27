import React, { Component } from 'react';
import '@/scss/user.scss'
import UserHadLogin from '@/components/user-hadLogin';

class Com extends Component {
  render () {
    return (
      <div className='container'>
        <div className = "box">
          <div className = "content">
            <div className='user-top'>
              <span className='iconfont icon-lingsheng'></span>
              <span className='iconfont icon-shezhi'></span>
            </div>
            <UserHadLogin />
            <div className='user-wallet'>
              <div className='user-wallet-title'>我的钱包</div>
              <div className='user-wallet-content'>
                <ul>
                  <li><i></i><p>我的卡包</p></li>
                  <li><i></i><p>我的红包</p></li>
                  <li><i></i><p>邀请好友</p></li>
                </ul>
              </div>
            </div>
            <div className='user-nav'>
              <ul>
                <li><i></i><p>签到</p></li>
                <li><i></i><p>心愿单</p></li>
                <li><i></i><p>足迹</p></li>
                <li><i></i><p>开具发票</p></li>
                <li><i></i><p>我的点评</p></li>
                <li><i></i><p>客服</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;