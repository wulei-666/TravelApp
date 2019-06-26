import React, { Component } from 'react';
import Footer from '@/components/Footer'

class Com extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className='container'>
        <div className = "box">
          <header className = "header">dingdan头部</header>
          <div className = "content">dingdan内容</div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Com;