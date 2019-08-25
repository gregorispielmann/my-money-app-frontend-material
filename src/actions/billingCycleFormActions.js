import axios from 'axios'

import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize, setSubmitFailed } from 'redux-form'
import { getList } from '../actions/billingCycleActions'

const BASE_URL = 'http://localhost:3001/api'

export function create(values){

    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles/`, values)
        .then(res => {
                console.log(res)
                toastr.success('Sucesso', 'Operação realizada com sucesso')
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                ])
            }
        )
        .catch(e => {
            setSubmitFailed('billingCycleForm')
            console.log(e)
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
            console.log('Entrou no erro')
        })
    }

}

export function editForm(item){
    console.log(item)
    return dispatch => {
        initialize('billingCycleForm', item, { keepValues: true})
    }
}