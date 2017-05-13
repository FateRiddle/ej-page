import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import * as actions from '../redux/actions'

class Sidebar extends React.Component {

  handleLinkClick = () => {
    const { changeFilter,changeCompleted } = this.props
    //重置
    changeFilter('')
    changeCompleted('all')
  }

  render() {
    return <ul className='Sidebar'>
      <li><NavLink to='/houtai/liangfang' onClick={()=> this.handleLinkClick()}>量房</NavLink></li>
      <li><NavLink to='/houtai/yuyue' onClick={()=> this.handleLinkClick()}>预约</NavLink></li>
      <li><NavLink to='/houtai/huodong' onClick={()=> this.handleLinkClick()}>活动</NavLink></li>
    </ul>
  }
}

Sidebar = connect(null,{ ...actions })(Sidebar)

export default Sidebar
