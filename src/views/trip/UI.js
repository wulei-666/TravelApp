import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import '@/scss/trip.scss'
class Com extends Component {
  constructor (props) {
    super (props);
    this.state = {
      tabs:[
        { title: '机票' },
        { title: '火车票' },
      ]
    }
  }
  goBack () {
    this.props.history.go(-1)
  }
  renderContent (tab){
    return (<div style={{  height: '140px', backgroundColor: '#CECECE' }}>
    <div className="plane">
      <ul>
        <li>
          <div className="plane-left">
            北京
          </div>
          <div className="plane-middle iconfont icon-feiji">
          </div>
          <div className="plane-right">
            上海
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div className="plane-left1">
            11月3日
          </div>
          <div className="plane-middle1 ">
            明天
          </div>
          <div className="plane-right1">
            返程日期
          </div>
        </li>
      </ul>
    <div className="box1">
      <div className="crile"></div>
      <span>携带儿童</span>
    </div>
    <div className="search">
     搜索
    </div>
    </div>
  </div>)
  }

  render () {
    return (
      <div className = "box">
        <header className = "header">
          <div className="header-left iconfont icon-fanhui1" onClick={this.goBack.bind(this)}> 
          </div>
          <div className="header-right" >
          </div>
        </header>
        <div className = "content">
          <div className="bg">
          </div>
          <div className="ticket">
            <Tabs tabs={this.state.tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
              {this.renderContent}
              <div className="plane">
                <ul>
                  <li>
                    <div className="plane-left">
                      北京
                    </div>
                    <div className="plane-middle iconfont icon-wangfan">
                    </div>
                    <div className="plane-right">
                      上海
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div className="plane-left1">
                      11月3日
                    </div>
                    <div className="plane-middle1 ">
                      明天
                    </div>
                    <div className="plane-right1">
                      返程日期
                    </div>
                  </li>
                </ul>
                <div className="box1">
                  <div className="crile"></div>
                  <span>高铁动车</span>
                </div>
                <div className="search">
                搜索
                </div>
                </div>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;