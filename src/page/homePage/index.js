import React, { useEffect } from 'react'
import "./style.less"
import { connect } from 'react-redux'
import { userDispatch as mapDispatchToProps } from "@/store/actions"

const HomePage = ({ getUserStatus, dispatch, ...rest }) => {
  useEffect(() => {
    getUserStatus()
    rest.getUserInfo()
    dispatch({ type: "SET_USERINFO", state: { nikeName: "名字", memberMobile: 18877778888 } })
  })
  return (
    <div className="homePage">{rest.isLogin ? "已登录" : "未登录"}</div>
  )
}

const mapStateToProps = ({ user }) => ({
  isLogin: user.isLogin
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)