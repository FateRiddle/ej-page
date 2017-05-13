import React from 'react'
import ContentTable from './ContentTable-huodong'
import ContentTableY from './ContentTable-yuyue'
import ContentHeader from './ContentHeader'
import { withRouter } from 'react-router'

class MainContent extends React.Component {

  render() {
    const { match:{ params } } = this.props
    return <div className="MainContent">
      <ContentHeader />
      {
        params.activity === 'yuyue'?<ContentTableY />:
        (params.activity === 'huodong' || params.activity === 'liangfang')?<ContentTable />:
        <div className='NoMatch'></div>
      }
    </div>
  }
}

export default withRouter(MainContent)
