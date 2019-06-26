import React, { Component } from 'react';
import '@/scss/theme.scss';

class Com extends Component {
  componentDidMount () {

  }
  goBack () {
    this.props.history.go(-1)
  }
  render () {
    return (
      <div className = "box">
        <header className = "header">
          <div className="header-left iconfont icon-fanhui1" onClick={this.goBack.bind(this)}></div>
          <div className="header-middel" >
           主题
          </div>
        </header>
        <div className = "content">
        <div className="contents">
          <div className = "content_title">
            当季精选主题
          </div>
          <div className = "content_hotel">
            <ul>
              <li>
                <div className="content_hotel_top">
                  <img src="" alt=""/>
                  <span className="iconfont icon-dingwei"><i>目的地</i></span>
                </div>
                <div className="content_hotel_bottom">
                  <div className="title">
                    日本东京五日游
                  </div>
                  <div className="title_bottom">
                    <p>￥2999起</p>
                    <i>最早预定时间：11月13号</i>
                  </div>
                </div>
              </li>
              <li>
                <div className="content_hotel_top">
                  <img src="" alt=""/>
                  <span className="iconfont icon-dingwei"><i>目的地</i></span>
                </div>
                <div className="content_hotel_bottom">
                  <div className="title">
                    日本东京五日游
                  </div>
                  <div className="title_bottom">
                    <p>￥2999起</p>
                    <i>最早预定时间：11月13号</i>
                  </div>
                </div>
              </li>
              <li>
                <div className="content_hotel_top">
                  <img src="" alt=""/>
                  <span className="iconfont icon-dingwei"><i>目的地</i></span>
                </div>
                <div className="content_hotel_bottom">
                  <div className="title">
                    日本东京五日游
                  </div>
                  <div className="title_bottom">
                    <p>￥2999起</p>
                    <i>最早预定时间：11月13号</i>
                  </div>
                </div>
              </li>
              <li>
                <div className="content_hotel_top">
                  <img src="" alt=""/>
                  <span className="iconfont icon-dingwei"><i>目的地</i></span>
                </div>
                <div className="content_hotel_bottom">
                  <div className="title">
                    日本东京五日游
                  </div>
                  <div className="title_bottom">
                    <p>￥2999起</p>
                    <i>最早预定时间：11月13号</i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Com;