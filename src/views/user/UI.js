import React, { Component } from 'react';
import Footer from '@/components/Footer'

class Com extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className='container'>
        <div className = "box">
          <header className = "header">个人中心头部</header>
          <div className = "content">个人中心内容</div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Com;