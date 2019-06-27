import React, { Component } from 'react';
import Footer from '@/components/Footer'

class Com extends Component {
  componentDidMount () {
    // this.props.getHomeBannerListData();
    // this.props.getHomeProListData();
  }

  render () {
    return (
      <div className='container'>
        <div className = "box">
          <header className = "header">发现头部</header>
          <div className = "content">发现内容</div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Com;