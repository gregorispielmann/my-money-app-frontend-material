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


class BillingCycleForm extends Component {

render() {

    const { handleSubmit } = this.props

    return(
        <React.Fragment>
        <form onSubmit={handleSubmit(this.props.create)}>
        <ContentHeader title="Ciclos de Pagamento"></ContentHeader>
        <Content>
            <div className="col-md-6">
                <CardForm title="Cadastro de Créditos" color="primary">
                    <Field name='name' component='input'></Field>
                    <Field name='month' component='input'></Field>
                    <Field name='year' component='input'></Field>
                    <FormButton color="primary" type='submit' label="Salvar"></FormButton>
                </CardForm>
            </div>
            <div className="col-md-6">
                <CardForm title="Cadastro de Débitos" color="danger">
                    <FormInput size="4" type="text" label="Nome" ></FormInput>
                    <FormInput size="4" type="email" label="Email" ></FormInput>
                    <FormInput size="4" label="Nome" ></FormInput>
                    <FormButton color="danger"  type='submit' label="Salvar"></FormButton>
                </CardForm>
            </div>
        </Content>
        </form>
    </React.Fragment>

    )


}
}

const mapDispatchToProps = dispatch => bindActionCreators({ create }, dispatch)

const element = connect(null, mapDispatchToProps)(BillingCycleForm)

export default reduxForm({form: 'billingCycleForm'})(element)