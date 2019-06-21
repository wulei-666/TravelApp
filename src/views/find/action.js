import api from '@/api';
import * as ajax  from '@/api'
export default {
  getHomeBannerListData (dispatch) {
  ajax.getShareDataFn().then(res => {
      console.log(res.data)
    })
}
}