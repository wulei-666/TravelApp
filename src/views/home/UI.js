import React, { Component } from 'react';
<<<<<<< HEAD
import Banner from '@/components/Banner';
=======
>>>>>>> 15af07c7649d2e00774cea4bf8f11dc1fd3a78b2
class Com extends Component {
  componentDidMount () {
    this.props.getHomeBannerListData();
    this.props.getHomeProListData();
  }

  render () {
    return (
      <div className = "box">
        <header className = "header">首页头部</header>
<<<<<<< HEAD
        <div className = "content">
          <Banner bannerlist = { this.props.homeBannerList } />
        </div>
=======
        <div className = "content">首页内容</div>
>>>>>>> 15af07c7649d2e00774cea4bf8f11dc1fd3a78b2
      </div>
    )
  }
}

export default Com;