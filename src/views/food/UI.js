import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import '@/scss/food.scss'

class Com extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  goBack () {
    this.props.history.go(-1)
  }

  render () {
    return (
      <div className = "box">
        <header className = "header">
        <div className="food-left">
          <div className="iconfont icon-fanhui1" onClick={this.goBack.bind(this)}></div>
        </div>
        <div className="food-input">
            <div className="search">
             法国
            <span className="iconfont icon-sousuo"></span>
            </div>
        </div>
        <div className="food-right">
        </div>
        </header>
        <div className = "content">
          <div className="banner">
              <img src='' />
          </div>
          <div className="recommend">
            <p>今日推荐</p>
            <div className="title">
            埃菲尔铁塔晚餐
            </div>
            <i>享受正宗法式大餐</i>
            <div class="introduce">
              <span className="iconfont icon-xingxing"></span>4.5<span>(23条评论)|34人评论过</span>
            </div>
            <div className="share">
              <span className="iconfont icon-fenxiang2"></span><span className="iconfont icon-xin"></span><span className="price">￥762</span>
            </div>
            </div>
          <div className="hotrecommend">
            热门推荐
            <WingBlank>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {this.state.data.map((val, index) => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: 'block',
                width: '160px',height: '108px' ,
                margin:0,
                // position: 'relative',
                // top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight,
                borderRadius: '10px'
                // boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '160px',height: '108px' ,verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              /><span className="foods">鹅肝</span>
            </a>
          ))}
        </Carousel>
      </WingBlank>
          </div>
        <div className="foodtravel">
          <p>美食之旅</p> 
          <ul>
            <li>
              <div className="foodtravel-left">
                <img src=""/> 
              </div>
              <div className="foodtravel-right">
                <h3>NO.1</h3>
                <div className="hotel">
                sdgjdf(香榭里大酒店)
                </div>
                <div className="content_contentss">
                你快点放手的撒打发时间大概的撒广东
                </div>
              </div>
            </li>
            <li>
              <div className="foodtravel-left">
                <img src=""/> 
              </div>
              <div className="foodtravel-right">
                <h3>NO.1</h3>
                <div className="hotel">
                sdgjdf(香榭里大酒店)
                </div>
                <div className="content_contentss">
                你快点放手的撒打发时间大概的撒广东
                </div>
              </div>
            </li>
            <li>
              <div className="foodtravel-left">
                <img src=""/> 
              </div>
              <div className="foodtravel-right">
                <h3>NO.1</h3>
                <div className="hotel">
                sdgjdf(香榭里大酒店)
                </div>
                <div className="content_contentss">
                你快点放手的撒打发时间大概的撒广东
                </div>
              </div>
            </li>
          </ul>
          
        </div>
        </div>
      </div>
    )
  }
}

export default Com;