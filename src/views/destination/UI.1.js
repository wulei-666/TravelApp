import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import '@/scss/destination.scss'

class Com extends Component {
  constructor (props) {
    super (props);
    this.state = {
      tabs:[
        { title: '热门城市' },
        { title: '全部城市' },
      ]
    }
  }
  renderContent (tab){
    return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '0', backgroundColor: '#ffffff' }}>
    <p></p>
  </div>)
  }

  componentDidMount () {

  }
  goBack () {
    console.log(this.props)
    this.props.history.go(-1)
  }
  render () {
    return (
      <div className = "box">
        <header className = "header">
          <div className="header-left iconfont icon-fanhui1" onClick={this.goBack.bind(this)}>
          </div>
          <div className="header-middel">
          目的地
          </div>
        </header>
        <div className = "content">
          <div className = "content-nav">
            <Tabs tabs={this.state.tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
             {this.renderContent} 
            </Tabs>
            <div className="bigbox">
              <div className="city">
              </div>
              <div className="citys">
                <span className="iconfont icon-xin"></span>
              台北
              </div> 
            </div>
            <div className="bigbox">
            <div className="city">
            </div>
              <div className="citys">
                <span className="iconfont icon-xin"></span>
              新加坡
              </div>
            </div>
            <div className="bigbox">
            <div className="city">
            </div>
              <div className="citys">
                <span className="iconfont icon-xin"></span>
              日本
              </div>
            </div>
            <div className="bigbox">
            <div className="city">
            </div>
              <div className="citys">
                <span className="iconfont icon-xin"></span>
              毛里求斯
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;