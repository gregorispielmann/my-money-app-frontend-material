import axios from 'axios'

import { toastr } from 'react-redux-toastr'
import { reset, startSubmit, stopSubmit, initialize } from 'redux-form'
import { getList } from '../actions/billingCycleActions'

const BASE_URL = 'http://localhost:3001/api'

export function create(values){
    // console.log(values)
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles/`, values)
        .then(res => {
                toastr.success('Sucesso', 'Operação realizada com sucesso')
                dispatch([
                    reset('billingCycleForm'),
                    getList(),
                    //seta flag true (para renderizar lista)
                    startSubmit('billingCycleForm'),
                    //muda flag submitting para false e permite editar itens novamente
                    stopSubmit('billingCycleForm')
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
    console.log('clicado handlecancel')
    return dispatch => { dispatch([
        getList()
    ])
    }
}