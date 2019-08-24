import React, {Component} from 'react'
import axios from 'axios'

// components
import CardDash from '../common/widgets/CardDash'
import ContentHeader from '../common/ContentHeader'
import Content from '../common/Content'

const BASE_URL = 'http://localhost:3001/api'

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = { credit: 0, debit: 0}
    }

    componentDidMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`).then(
            res => this.setState(res.data)
        )
    }


render(){

    const {credit, debit} = this.state

return (
    <React.Fragment>
        <ContentHeader title="Dashboard without Redux"></ContentHeader>
        <Content>
            <CardDash icon="account_balance" coloricon="warning" title={credit - debit} unity="R$ " category="Total Consolidado"></CardDash>
            <CardDash icon="attach_money" coloricon="primary" title={credit} unity="R$ " category="Créditos"></CardDash>
            <CardDash icon="credit_card" coloricon="danger" title={debit} unity="- R$ " category="Débitos"></CardDash>
        </Content>
    </React.Fragment>
)}}

export default Dashboard