import { connect } from 'react-redux';
import UI from './UI';
import axios from 'axios'

const Com = connect()(UI)

axios.get('http://47.102.116.59:3000/getShareData').then(res => {
console.log(res.data)
// 后续的业务逻辑
})
axios.get('http://47.102.116.59:3000/getBookData').then(res => {
console.log(res.data)
// 后续的业务逻辑
})
axios.get('http://47.102.116.59:3000/getDestinationData').then(res => {
console.log(res.data)
// 后续的业务逻辑
})
axios.get('http://47.102.116.59:3000/getFoodData').then(res => {
console.log(res.data)
// 后续的业务逻辑
})
axios.get('http://47.102.116.59:3000/getFindProListData').then(res => {
console.log(res.data)
// 后续的业务逻辑
})
axios.get('http://47.102.116.59:3000/getDetailData').then(res => {
console.log(res.data)
// 后续的业务逻辑
})
axios.get('http://47.102.116.59:3000/getCommentData').then(res => {
console.log(res.data)
// 后续的业务逻辑
})


export default Com;