import React, { Component } from 'react';
class Com extends Component {
  componentDidMount () {
    this.props.getHomeBannerListData();
    this.props.getHomeProListData();
  }

  render () {
    return (
      <div className = "box">
        <header className = "header">首页头部</header>
        <div className = "content">首页内容</div>
      </div>
    )
  }
}

export default Com;