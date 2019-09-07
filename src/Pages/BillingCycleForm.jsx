import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

//actions
import { create, loadItem, handleCancel } from '../actions/billingCycleFormActions'

import Content from '../common/Content'
import ContentHeader from '../common/ContentHeader'
import CardForm from '../common/widgets/CardForm'
import FormInput from '../common/widgets/FormWidgets/FormInputs'
import FormButton from '../common/widgets/FormWidgets/FormButton'

import { Redirect } from 'react-router-dom'

class BillingCycleForm extends Component {

    componentDidMount(){

        //testa se o item é valido
        if(this.props.item){
            //testa condição se há item carregado, caso negativo carrega item que veio para ediçao
            if(!(Object.entries(this.props.item).length === 0)){
                this.props.loadItem(this.props.item)
            }
        }
    }

render() {

    const { handleSubmit, submitting, create } = this.props

    // em caso de envio com sucesso seta flag true e redireciona
    if(submitting){ 
        return <Redirect to='/billing-cycle'></Redirect>
    }

    return(
        <React.Fragment>
        <form onSubmit={handleSubmit(create)}>
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
                    <FormButton type='button' onClick={ this.props.handleCancel } color="secondary ml-2"  label="Cancelar"></FormButton>
                </CardForm>
            </div>
            <div className="col-md-6"></div>
        </Content>
        </form>
    </React.Fragment>

    )
}
}

const mapStateToProps = state => ({
    item: state.billingCycle.item,
})

const mapDispatchToProps = dispatch => bindActionCreators({ loadItem, create, handleCancel }, dispatch)

BillingCycleForm = connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)