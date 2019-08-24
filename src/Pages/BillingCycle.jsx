import React, { Component } from 'react'

import Content from '../common/Content'
import ContentHeader from '../common/ContentHeader'
import CardTable from '../common/widgets/CardTable'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList } from '../actions/billingCycleActions.js'

class BillingCycle extends Component {

    componentDidMount() {
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []
        return list.map( item => (
            <tr key={`tr+${item._id}`}>
                <td>{item.name}</td>
                <td>{item.month}</td>
                <td>{item.year}</td>
            </tr>       
        )
    )
    }

render() {


    return(
        <React.Fragment>
        <ContentHeader title="Ciclos de Pagamento"></ContentHeader>
        <a href="/#/billing-cycle-form">
            <button type="button" className="btn btn-success btn-md">
                <i className="material-icons">add</i>Incluir
            </button>
        </a>
        <Content>
            <div className="col-md-12">
                <CardTable title="Lista" color="primary">
                {this.renderRows()}
                </CardTable>
            </div>
        </Content>
    </React.Fragment>

    )


}
}

const mapStateToProps = state => ({
    list: state.billingCycle.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle)