import React, { Component } from 'react'

import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

//actions
import { create, update, loadItem, handleCancel } from '../actions/billingCycleFormActions'

import Content from '../common/Content'
import ContentHeader from '../common/ContentHeader'
import CardForm from '../common/widgets/CardForm'
import FormInput from '../common/widgets/FormWidgets/FormInputs'
import FormButton from '../common/widgets/FormWidgets/FormButton'
import FormList from '../common/widgets/FormWidgets/FormList'
import Summary from '../common/widgets/FormWidgets/summary'

import { Redirect } from 'react-router-dom'

class BillingCycleForm extends Component {

    componentDidMount(){

        //testa se o item é valido
        if(this.props.item){
            //testa condição se há item carregado, caso negativo carrega item que veio para ediçao
            if(!(Object.entries(this.props.item).length === 0)){
                this.props.loadItem(this.props.item)
            } else {
                // se não há item carregado e é vazio seta credito e debito
                this.props.loadItem({credits: [{}], debits: [{}]})
            }
        } else {
            // se não e válido seta credito e debito
            this.props.loadItem({credits: [{}], debits: [{}]})
        }

    }

    calculateSummary() {
        const sum = (t, v) => t + v

        if(this.props.credits && this.props.debits) 
        { 
            return { 
                sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
                sumOfDebits: this.props.debits.map(d => +d.value || 0).reduce(sum)
            }
        } else {
             return {} 
        }
    }


render() {

    const { sumOfCredits, sumOfDebits } = this.calculateSummary()
    const { handleSubmit, submitting, create, update, credits, debits } = this.props

    // em caso de envio com sucesso seta flag true e redireciona
    if(submitting){ 
        return <Redirect to='/billing-cycle'></Redirect>
    }

    return(
        <React.Fragment>
        <form onSubmit={this.props.updateFlag ? handleSubmit(update) : handleSubmit(create)}>
        <ContentHeader title="Ciclos de Pagamento"></ContentHeader>
        <Content>
            <div className="col-md-12">
                <CardForm title="Cadastro de Ciclo" color="primary">
                    <Field name='name' component={FormInput}
                        size='4' label='Nome' type='text'
                    ></Field>
                    <Field name='month' component={FormInput}
                        size='4' label='Mês' type='number' min='1' max='12'
                    ></Field>
                    <Field name='year' component={FormInput}
                        size='4' label='Ano' type='number' max='2100' min='1970'
                    ></Field>
                </CardForm>
            </div>
            <div className="col-md-12">
                <Summary credit={sumOfCredits} debit={sumOfDebits}></Summary>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <CardForm title="Cadastro de Créditos" color="success">
                    <FormList listType='credits' showStatus={true} list={credits}></FormList>
                </CardForm>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <CardForm title="Cadastro de Débitos" color="danger">
                    <FormList listType='debits' showStatus={true} list={debits}></FormList>
                </CardForm>
            </div>
            <div className="col-md-12">
            <FormButton color="primary" type='submit' label="Salvar"></FormButton>
            <FormButton type='button' onClick={ this.props.handleCancel } color="secondary ml-2"  label="Cancelar"></FormButton>
            </div>
        </Content>
        </form>
    </React.Fragment>

    )
}
}

const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
    item: state.billingCycle.item,
    updateFlag: state.billingCycle.updateFlag,
    credits: selector(state, 'credits'),
    debits: selector(state, 'debits')
})

const mapDispatchToProps = dispatch => bindActionCreators({ loadItem, create, update, handleCancel }, dispatch)

BillingCycleForm = connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)