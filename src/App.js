import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Map from './pages/Map'
import City from './pages/City'
import NoFound from './pages/NoFound'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            {/* <Redirect exact from="/" to="/home"></Redirect> */}
            <Route path="/" component={Layout}></Route>
            <Route path="/city" component={City}></Route>
            <Route path="/map" component={Map}></Route>
            <Route component={NoFound}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

/*
App组件配置路由

*/
