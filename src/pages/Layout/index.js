import React from 'react'
import styles from './index.module.scss'
import { Switch, Route, Redirect } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
  MessageFill
} from 'antd-mobile-icons'
import Home from '../Layout/Home'
import FoundHouse from '../Layout/FoundHouse'
import News from '../Layout/New'
import My from '../Layout/My'

const tabs = [
  {
    key: 'home',
    title: '首页',
    icon: <AppOutline />,
    path: '/home' || '/'
  },
  {
    key: 'todo',
    title: '找房',
    icon: <UnorderedListOutline />,
    path: '/found_house'
  },
  {
    key: 'message',
    title: '资讯',
    icon: <MessageFill />,
    path: '/news'
  },
  {
    key: 'personalCenter',
    title: '我的',
    icon: <UserOutline />,
    path: '/my'
  }
]

// const [activeKey, setActiveKey] = useState('todo')
class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeKey: ''
    }
  }

  componentDidMount() {
    const res = tabs.find((v) => {
      return v.path === this.props.location.pathname
    })
    this.setState({
      activeKey: res.key
    })
  }

  render() {
    return (
      <div className={styles.layout}>
        <Switch>
          <Redirect from="/" to="/home" exact></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/found_house" component={FoundHouse}></Route>
          <Route path="/news" component={News}></Route>
          <Route path="/my" component={My}></Route>
        </Switch>

        {this.renderTabBar()}
      </div>
    )
  }

  // 底部tabBar
  renderTabBar() {
    const { activeKey } = this.state
    return (
      <TabBar activeKey={activeKey} onChange={this.setActiveKey.bind(this)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} title={item.title} icon={item.icon} />
        ))}
      </TabBar>
    )
  }

  setActiveKey(val) {
    const res = tabs.find((v) => {
      return v.key === val
    })
    // console.log(this.props)
    this.props.history.push(res.path)
    this.setState({
      activeKey: val
    })
  }
}

export default Layout
