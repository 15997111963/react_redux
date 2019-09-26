const _state = {
  isLogin: false,
  userInfo: {
    nickName: '',
    memberMobile: ''
  },
  addressArray: [],
  address: {}
}

const userReducer = (state = _state, action = {}) => {
  switch (action.type) {
    case 'SET_LOGIN':
      return {  ...state, isLogin: action.state }
    case 'SET_USERINFO':
      return {  ...state, userInfo: action.state }
    case 'SET_ADDRESS':
      return {  ...state, address: action.state }
    case 'SET_ADDRESSARRAY':
      return {  ...state, addressArray: action.state }
    default:
      return state
  }
}

export function setLogin (state) {
  return {
    type: "SET_LOGIN",
    payload: state
  }
}

export function setUserInfo (state) {
  return {
    type: "SET_USERINFO",
    payload: state
  }
}

export function setAddress (state) {
  return {
    type: "SET_ADDRESS",
    payload: state
  }
}

export function setAddressArray (state) {
  return {
    type: "SET_ADDRESSARRAY",
    payload: state
  }
}

export default userReducer