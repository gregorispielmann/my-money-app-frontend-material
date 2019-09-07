import axios from 'axios'

import { toastr } from 'react-redux-toastr'

const BASE_URL = 'http://localhost:3001/api'

export function getList(){
    const req = axios.get(
        `${BASE_URL}/billingCycles/`
    )
    return {
        type: 'BILLING_LIST_FETCH',
        payload: req
    }
}

export function editItem(item){
    // console.log('item no action creator ', item)
    return{
        type: 'EDIT_ITEM',
        payload: item
    }
}

export function clearItem(){
    return {
        type: 'CLEAR_ITEM',
        payload: null,
    }
}

export function removeItem(item){
    // console.log('Remove item: ',id)

    return dispatch => {
        toastr.confirm(
            `Deseja deletar "${item.name}"?`,
            {
                okText: 'Sim',
                cancelText: 'Cancelar',
                onOk: () =>
                axios.delete(
                    `${BASE_URL}/billingCycles/${item._id}`
                )
                .then(dispatch([
                        toastr.success('Sucesso', 'Item removido com sucesso'),
                        getList()
                ]))
                .catch(e => {
                    console.log(e)
                    // if(e.response.status === 500){
                    //     setSubmitFailed('billingCycleForm')
                    // }
                    e.response.data.errors.forEach(error => toastr.error('Erro', error))
                }),
                onCancel: () => { return null }
            }
        )
    }
}