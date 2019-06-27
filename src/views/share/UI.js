import React, { Component } from 'react';
import Footer from '@/components/Footer'

class Com extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className='container'>
        <div className = "box">
          <header className = "header">分享头部</header>
          <div className = "content">分享内容</div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Com;