import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Login from '../Pages/Login'

import { validateToken } from '../auth/authActions'
import App from './app'
// import BillingCycle from '../Pages/BillingCycle'

class AuthApp extends React.Component{

    
    componentDidMount() {
        if(this.props.auth.user){
            this.props.validateToken(this.props.auth.user.token)
        }
    }
    
    render(){
        const { user, validToken } = this.props.auth
        if(user && validToken){
            axios.defaults.headers.common['authorization'] = user.token
            return <App>{this.props.children}</App>
            // return <Login></Login>
        } else if (!user && !validToken){
            return <Login></Login>
        } else {
            return false
        }

        // return <Main></Main>

    }

}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken },
dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthApp)