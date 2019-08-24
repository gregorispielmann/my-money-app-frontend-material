import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from '../actions/dashboardActions.js'

// components
import CardDash from '../common/widgets/CardDash'
import ContentHeader from '../common/ContentHeader'
import Content from '../common/Content'

class Dashboard extends Component {


    componentDidMount() {
        this.props.getSummary()
    }


render(){

    const {credit, debit} = this.props.summary

return (

    <React.Fragment>
        <ContentHeader title="Dashboard"></ContentHeader>
        <Content>
            <CardDash icon="account_balance" coloricon="warning" title={credit - debit} unity="R$ " category="Total Consolidado"></CardDash>
            <CardDash icon="attach_money" coloricon="primary" title={credit} unity="R$ " category="Créditos"></CardDash>
            <CardDash icon="credit_card" coloricon="danger" title={debit} unity="- R$ " category="Débitos"></CardDash>
        </Content>
    </React.Fragment>
)}}

const mapStateToProps = state => ({
    summary: state.dashboard.summary
})

const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)