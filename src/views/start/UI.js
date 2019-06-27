import React, { Component } from 'react'
import '@/scss/start.scss'

class Com extends Component {
  render () {
    console.log(2)
    return (
      <div className='startBox'>
        <div className='content'>
          <p className='start-p1'>登录</p>
          <p className='start-p2'>注册</p>
        </div>
      </div>
    )
  }
}

export default Com;
