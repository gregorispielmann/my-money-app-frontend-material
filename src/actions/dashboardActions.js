import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api'

export function getSummary(){
    const req = axios.get(
        `${BASE_URL}/billingCycles/summary`
    )
    return {
        type: 'BILLING_SUMMARY_FETCH',
        payload: req
    }
}