import React, { Component } from 'react'

import Content from '../common/Content'
import ContentHeader from '../common/ContentHeader'
import CardTable from '../common/widgets/CardTable'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Redirect } from 'react-router-dom'

import { getList, editItem } from '../actions/billingCycleActions.js'

class BillingCycle extends Component {

    state = {
        redirect: false,
    }

    componentDidMount() {
        this.props.getList()
    }

render() {

    const renderRows = () => {

        const list = this.props.list || []
        return list.map( item => (
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.month}</td>
                <td>{item.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => {
                        // console.log('Item no onclick ', item)
                        this.props.editItem(item)
                        return this.setState({
                        redirect: true
                            })}
                        }
                        >
                        <i className='material-icons'>edit</i>
                    </button>
                    <button className='btn btn-danger'>
                        <i className='material-icons'>delete</i>
                    </button>
                </td>
            </tr>       
        )
    )
    }

    if(this.state.redirect) {
        return <Redirect
        to={{
          pathname: "/billing-cycle-form",
        }}
        ></Redirect>
    }

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
                {renderRows()}
                </CardTable>
            </div>
        </Content>
    </React.Fragment>

    )


}
}

const mapStateToProps = state => ({
    list: state.billingCycle.list,
    item: state.billingCycle.item
})


const mapDispatchToProps = dispatch => bindActionCreators({ getList, editItem }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle)