import axios from 'axios'

import { push } from 'react-router-redux'

import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
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
                    push('/billingCycle')
                ])
            }
        )
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    }

}