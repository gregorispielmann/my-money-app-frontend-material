import axios from 'axios'

import { toastr } from 'react-redux-toastr'
import { reset as resetForm, startSubmit, stopSubmit } from 'redux-form'
import { getList } from '../actions/billingCycleActions'

const BASE_URL = 'http://localhost:3001/api'

export function create(values){

    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles/`, values)
        .then(res => {
                toastr.success('Sucesso', 'Operação realizada com sucesso')
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    //seta flag true (para renderizar lista)
                    startSubmit('billingCycleForm'),
                    //muda flag submitting para false e permite editar itens novamente
                    stopSubmit('billingCycleForm')
                ])
            }
        )
        .catch(e => {
            // if(e.response.status === 500){
            //     setSubmitFailed('billingCycleForm')
            // }
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    }

}

export function loadItem(data) {
    return {
            type: 'LOAD',
            payload: data
        }
    }

export function clear(){
    return{
        type: 'CLEAR'
    }
}