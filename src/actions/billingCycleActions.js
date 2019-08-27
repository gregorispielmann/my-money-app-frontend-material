import axios from 'axios'

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
    console.log('item no action creator ', item)
    return{
        type: 'EDIT_ITEM',
        payload: item
    }
}