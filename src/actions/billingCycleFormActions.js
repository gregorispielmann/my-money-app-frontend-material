import axios from 'axios'

import { toastr } from 'react-redux-toastr'
import { reset, startSubmit, stopSubmit, initialize } from 'redux-form'
import { getList } from '../actions/billingCycleActions'

const BASE_URL = 'http://localhost:3001/api'

function submit(values, method){
    
    const id = values._id ? values._id : ''

    return dispatch => {
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
        .then(res => {
                toastr.success('Sucesso', 'Operação realizada com sucesso')
                dispatch([
                    reset('billingCycleForm'),
                    getList(),
                    //seta flag true (para renderizar lista)
                    startSubmit('billingCycleForm'),
                    //muda flag submitting para false e permite editar itens novamente
                    stopSubmit('billingCycleForm'),
                ])
            }
        )
        .catch(e => {
            console.log(e)
            // if(e.response.status === 500){
            //     setSubmitFailed('billingCycleForm')
            // }
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    }
}

export function create(values){
    // console.log(values)
    return submit(values,'post')

}

export function update(values){
    // console.log(values)
    return submit(values, 'put')

}

export function loadItem(data) {
    // console.log('data', data)
    return [
        initialize('billingCycleForm', data),
        {
            type: 'CLEAR_ITEM',
            payload: null
        }
    ]
}

export function handleCancel(){
    return dispatch => [
    toastr.confirm(
        `Deseja mesmo cancelar?`,
        {
            okText: 'Sim',
            cancelText: 'Não',
            onOk: () => {
            toastr.success('Sucesso', 'Cancelado com sucesso')
            dispatch([
                initialize('billingCycleForm', null),
                //seta flag true (para renderizar lista)
                startSubmit('billingCycleForm'),
            ])},
            onCancel: () => { return null }
        }
    )
    ]
}