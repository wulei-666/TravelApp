const Mock = require('mockjs');

function getShareDataFn () {
  let arr = [];
  for (var i = 0; i < 7; i++ ) {
    arr.push({
      id: 'share' + i,
      shareImgSmallSrc: Mock.Random.image('30x30', Mock.mock('@color()')),
      shareImgBigSrc: Mock.Random.image('332x160', Mock.mock('@color()')),
      shareTitle: Mock.mock('@ctitle()'),
      shareContent: Mock.mock('@cparagraph'),
      shareDate: Mock.mock('@now()'),
      shareFabulous: Mock.mock('@natural(60, 200)'),
      shareTimes: Mock.mock('@natural(60, 200)')
    })
  }
  return arr;
}

function getBookDataFn () {
  let arr = [];
  for (var i = 0; i < 7; i++ ) {
    arr.push({
      id: 'book' + i,
      bookImgSrc: Mock.Random.image('314x100', Mock.mock('@color()')),
      bookTitle: Mock.mock('@ctitle()'),
      bookDate: Mock.mock('@now()'),
    })
  }
  return arr;
}

function getDestinationDataFn () {
  let arr = [];
  for (var i = 0; i < 7; i++ ) {
    arr.push({
      id: 'des' + i,
      desImgSmallSrc: Mock.Random.image('140x108', Mock.mock('@color()')),
      desImgBigSrc: Mock.Random.image('260x140', Mock.mock('@color()')),
      desTitle: Mock.mock('@ctitle()'),
    })
  }
  return arr;
}

function getFoodDataFn () {
  let arr1 = [];
  let arr2 = [];
  for (var i = 0; i < 7; i++ ) {
    arr1.push({
      id: 'food' + i,
      foodHotImgSrc: Mock.Random.image('160x108', Mock.mock('@color()')),
      foodTitle: Mock.mock('@ctitle()'),
    })
  }
  // return arr1;
  for (var i = 0; i < 7; i++ ) {
    arr2.push({
      id: 'travel' + i,
      foodTravelImgSrc: Mock.Random.image('160x120', Mock.mock('@color()')),
      foodTravelNo: i,
      foodTravelTitle: Mock.mock('@ctitle()'),
      foodTravelContent: Mock.mock('@cparagraph')
    })
  }
  return {
    foodHotData: arr1,
    foodTraveData: arr2
  };
}

// 发现Prolist

let homeActivitieList = [];
let homeObjectiveList = [];
let homeFunList = [];
let Activities = ['背景', '上海', '天金', '南京', '北京', '广东', '河南'];
let Objectives= ['背景', '上海', '天金', '南京', '北京', '广东', '河南'];
let FunnyThing= ['吹风','旋转木马']
const getFindProListDataFn = function () {
  for (var i = 0; i < 5; i++) {
    let item = {
      id: 'Activities' + i,
      type: 1, 
      title: Activities[Math.floor(Math.random() * Activities.length)],
      itemSrc: Mock.Random.image('100x100', Mock.mock('@color()')),
      prices:Mock.mock({"number|1-100": 100}),
      backNum:Mock.mock({"number|+1": 202}),
      wantNum:Mock.mock({"number|+1": 202}), 
    }
    homeActivitieList.push(item)
  }
  for (var j = 0; j < 6; j++) {
    let item = {
      id: 'Objectives' + j,
      type: 2, 
      title: Objectives[Math.floor(Math.random() * Objectives.length)],
      itemSrc: Mock.Random.image('100x100', Mock.mock('@color()')),
      city:Mock.mock({ "object|2": {"310000": "上海市","320000": "江苏省", "330000": "浙江省","340000": "安徽省" }}),
      explain: '说明文字'

    }
    homeObjectiveList.push(item)
  }
  for (var k = 0; k < 2; k++) {
    let item = {
      id: 'FunnyThing' + k,
      type: 3, 
      title: FunnyThing[Math.floor(Math.random() * FunnyThing.length)],
      itemSrc: Mock.Random.image('100x100', Mock.mock('@color()')),
      city:Mock.mock({ "object|2": {"310000": "上海市","320000": "江苏省", "330000": "浙江省","340000": "安徽省" }}),
      content: '说明文字'

    }
    homeFunList.push(item)
  }

  return {
    Activities: homeActivitieList,
    Objectives: homeObjectiveList,
    FunnyThing: homeFunList
  }
}

// 发现Prolist

// 评论+详情

function getDetailDataFn () {
  let arr = [];
  for (var i = 0;i<10; i++){
    arr.push({
      id: 'detailImg' + i,
      detailImg: Mock.Random.image('367*370',Mock.mock('@color()')),
      detailAlt: '',
      detailHref: '',
      detailTitle: Mock.mock('@ctitle'),
      detailPrice: Math.random() * 200 + 50,
      detailContent: Mock.mock('@cparagraph'),
      detailExtractImg: Mock.Random.image('310*200',Mock.mock('@color()'))
    })
  }
//  return arr;
  return {
    code: 200,
    message: 'ok',
    data: arr
  }
}
function getCommentDataFn () {
  let arr = [];
  for (var i = 0;i<10; i++){
    arr.push({
      id:'comment' + i,
      commentImgSmall: Mock.Random.image('30*30',Mock.mock('@color()')),
      commentImgBigSrc: Mock.Random.image('109*94',Mock.mock('@color()')),
      commentDate: Mock.mock('@now()'),
      commentTitle: Mock.mock('@ctitle'),
      commentContent: Mock.mock('@cparagraph'),
      commentFabulous: Mock.mock({
        "number|1-1000": 300
      })
    })
  }
//  return arr;
  return {
    code: 200,
    message: 'ok',
    data: arr
  }
}

// 评论+详情

Mock.mock('http://47.102.116.59:3000/getShareData', 'get' ,getShareDataFn)
Mock.mock('http://47.102.116.59:3000/getBookData', 'get' ,getBookDataFn)
Mock.mock('http://47.102.116.59:3000/getDestinationData', 'get' ,getDestinationDataFn)
Mock.mock('http://47.102.116.59:3000/getFoodData', 'get' ,getFoodDataFn)
Mock.mock('http://47.102.116.59:3000/getFindProListData', 'get', getFindProListDataFn)
Mock.mock('http://47.102.116.59:3000/getDetailData', 'get' ,getDetailDataFn)
Mock.mock('http://47.102.116.59:3000/getCommentData', 'get' ,getCommentDataFn)
