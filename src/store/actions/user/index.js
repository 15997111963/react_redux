import ajax from '@/api'

export default dispatch => {
  return {
    getUserStatus: ()=> {
      setTimeout(() => {
        dispatch({ type: "SET_LOGIN", state: true })
      }, 1000)
    },
    getAddressArray: () => {
      ajax.user.getUserAddressList().then(response => {
        dispatch({ type: 'SET_ADDRESSARRAY', state: response.data || [] })
        if ((response.data || []).some(v => v.defaultStatus === '0')) {
          dispatch({ type: 'SET_ADDRESS', state: response.data.find(v => v.defaultStatus === '0') })
        }
      })
    },
    getUserInfo: () => {
      // to do something 上面已经有基本的演示 不会用 copy 套用总会吧。。
    },
    dispatch
  }
}