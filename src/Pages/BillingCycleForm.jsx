import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { create } from '../actions/billingCycleFormActions'
import { bindActionCreators } from 'redux';

import Content from '../common/Content'
import ContentHeader from '../common/ContentHeader'
import CardForm from '../common/widgets/CardForm'
import FormInput from '../common/widgets/FormWidgets/FormInputs'
import FormButton from '../common/widgets/FormWidgets/FormButton'

import { Redirect } from 'react-router-dom'

class BillingCycleForm extends Component {
    
render() {

    const { handleSubmit } = this.props

    // em caso de envio com sucesso seta flag true e redireciona
    if(this.props.submitting){ 
        return <Redirect to='/billing-cycle'></Redirect>
    }
    
    return(
        
        <React.Fragment>
        <form onSubmit={handleSubmit(this.props.create)}>
        <ContentHeader title="Ciclos de Pagamento"></ContentHeader>
        <Content>
            <div className="col-md-6">
                <CardForm title="Cadastro de Créditos" color="primary">
                    <Field name='name' component={FormInput}
                        size='4' label='Nome' type='text'
                    ></Field>
                    <Field name='month' component={FormInput}
                        size='4' label='Mês' type='number' min='1' max='12'
                    ></Field>
                    <Field name='year' component={FormInput}
                        size='4' label='Ano' type='number' max='2100' min='1970'
                    ></Field>
                    <FormButton color="primary" type='submit' label="Salvar"></FormButton>
                </CardForm>
            </div>
            <div className="col-md-6"></div>
{ /*            <div className="col-md-6">
                <CardForm title="Cadastro de Débitos" color="danger">
                    <Field name='name' component={FormInput}
                    size='4' label='Nome' type='text'
                    ></Field>
                    <Field name='month' component={FormInput}
                        size='4' label='Mês' type='number' min='1' max='12'
                    ></Field>
                    <Field name='year' component={FormInput}
                        size='4' label='Ano' type='number' max='2100' min='1970'
                    ></Field>
                    <FormButton color="danger"  type='submit' label="Salvar"></FormButton>
                </CardForm>
            </div> */}
        </Content>
        </form>
    </React.Fragment>

    )


}
}

const mapStateToProps = state => ({
    initialValues: { billingCycleForm: state.billingCycle.item } 
})

const mapDispatchToProps = dispatch => bindActionCreators({ create }, dispatch)

const element = connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)

export default reduxForm({form: 'billingCycleForm', destroyOnUnmount: false, enableReinitialize: true})(element)