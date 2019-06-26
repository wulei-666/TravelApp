import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import '@/scss/find.scss'
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
          <header className = "header">
          <div className="find-left">
            <div className="" >login</div>
          </div>
          <div className="find-input">
              <div className="search">
              <span className="iconfont icon-sousuo"></span>
              搜索目的地、活动
              </div>
          </div>
          <div className="find-right">
          </div>
          </header>
          <div className = "content">
            <div className="banner">
              <img src='' />
              <p>我是一段旅游得介绍文字</p>
            </div>
            <div className='find-nav'>
              <ul>
                <Link to ='/finds/destination'><p><img src=''/></p><span >目的地</span></Link>
                <Link to ='/finds/food'><p><img src=''/></p><span>美食</span></Link>
                <Link to ='/finds/trip'><p><img src=''/></p><span>出行</span></Link>
                <Link to ='/finds/theme'><p><img src=''/></p><span>主题</span></Link>
              </ul>
            </div>
            <div className='find-content'>
              <div className="activites">
                <h4>推荐活动</h4>
                <p>说名文字</p>
                <div className="activite">
                  <div className="images">
                    <img src=""/>
                  </div>
                  <div className="name">活动名称</div>
                  <span className="price">
                  价格
                  </span>
                  <span>690人去过</span>|<span>390人想去</span>
                </div>
                <div className="activite">
                  <div className="images">
                    <img src=""/>
                  </div>
                  <div className="name">活动名称</div>
                  <span className="price">
                  价格
                  </span>
                  <span>690人去过</span>|<span>390人想去</span>
                </div>
                <div className="activite">
                  <div className="images">
                    <img src=""/>
                  </div>
                  <div className="name">活动名称</div>
                  <span className="price">
                  价格
                  </span>
                  <span>690人去过</span>|<span>390人想去</span>
                </div>
                <div className="activite">
                  <div className="images">
                    <img src=""/>
                  </div>
                  <div className="name">活动名称</div>
                  <span className="price">
                  价格
                  </span>
                  <span>690人去过</span>|<span>390人想去</span>
                </div>
              </div>
            </div>
            <div className='find-destination'>
              <div className="destination">
                <h4>推荐目的地</h4>
                <p>说名文字</p> 
                <ul>
                  <li><img src=""/><span>目的地</span><i>文字说明</i></li>
                  <li><img src=""/><span>目的地</span><i>文字说明</i></li>
                  <li><img src=""/><span>目的地</span><i>文字说明</i></li>
                  <li><img src=""/><span>目的地</span><i>文字说明</i></li>
                  <li><img src=""/><span>目的地</span><i>文字说明</i></li>
                  <li><img src=""/><span>目的地</span><i>文字说明</i></li>
                </ul>
              </div>
            </div>
            <div className="find-fun">
              <div className="funny">
                <h4>发现趣事</h4>
                <p>说名文字</p>
            <div className="bigbox">
              <div className="box">
                <div className='find-funbox'>
                  <div className="funbox-left">
                  </div>
                  <div className="funbox-right">
                    <div className="funbox-right-top">
                      <div className="designation">
                      名称
                      </div>
                      <span className="iconfont icon-fanhui"></span>
                    </div>
                    <div className="funbox-right-bottom">
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className='find-funbox'>
                  <div className="funbox-left">
                  </div>
                  <div className="funbox-right">
                    <div className="funbox-right-top">
                      <div className="designation">
                      名称
                      </div>
                      <span className="iconfont icon-fanhui"></span>
                    </div>
                    <div className="funbox-right-bottom">
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>  
            </div>
            </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Com;