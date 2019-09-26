import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
// import routerModule from './routerModule' 
import HomePage from '@/page/homePage'

import User from '@/page/user'
import userDetail from '@/components/user/detail'
import userManual from '@/components/user/manual'

const routerConfig = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/home/' component={HomePage}/>
      <Route path='/user' render={(props) => (
        <User>
          <Route exact path="/user/detail/" component={userDetail}/>
          <Route exact path="/user/manual" component={userManual}/>
        </User>
      )}/>
    </Switch>
  </BrowserRouter>
)

export default routerConfig