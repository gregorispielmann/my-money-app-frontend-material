import React, { Component } from 'react'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import { connect } from 'react-redux'
import FormInputs from './FormInputs'
import { bindActionCreators } from 'redux'

import { toastr } from 'react-redux-toastr'
import FormDropdown from './FormDropdown'

class FormList extends Component {

    add(index, item = {}){
        this.props.arrayInsert('billingCycleForm', this.props.listType, index, item)
    }

    remove(index){
        if(this.props.list.length > 1){
            this.props.arrayRemove('billingCycleForm', this.props.listType, index)
        } else {
            toastr.error('Erro', `Você não pode deletar todos os ${this.props.listType === 'credits' ? 'CRÉDITOS' : 'DÉBITOS'}`)
        }
    }

    renderRows() {

        let list = this.props.list || []

        return list.map((item, index) => (
            <tr className='border-0' key={index}>
                <td><Field name={`${this.props.listType}[${index}].name`} placeholder='Informe o nome' component={FormInputs}></Field></td>
                <td><Field name={`${this.props.listType}[${index}].value`} placeholder='Informe o valor' component={FormInputs}></Field></td>
                {this.props.showStatus ?
                    <td><Field name={`${this.props.listType}[${index}].status`} placeholder='Status' credits={this.props.listType === 'credits'} option={`${this.props.listType}[${index}].status`} component={FormDropdown}></Field></td>
                : null
                }
                <td className='td-actions'>
                    <button type='button' className='btn btn-success' onClick={ () => {this.add(index + 1)}}>
                        <i className='material-icons'>plus_one</i>
                    </button>
                    <button type='button' className='btn btn-warning' onClick={ () => {this.add(index + 1, item)}}>
                        <i className='material-icons'>file_copy</i>
                    </button>
                    <button type='button' className='btn btn-danger' onClick={ () => {this.remove(index)}}>
                        <i className='material-icons'>delete</i>
                    </button>
                </td>
            </tr>
        ))
    }

    render(){
        return(
            <div className="table-responsive">
            <table className="table">
                <thead className="text-primary">
                    <tr>
                        <th>
                            Descrição
                        </th>
                        <th>
                            Valor
                        </th>
                        { this.props.showStatus ? 
                            <th>
                                Status
                            </th>
                            : null
                        }
                        <th>
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderRows() } 
                </tbody>
            </table>
            <div className="clearfix"></div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)

export default connect(null, mapDispatchToProps)(FormList)