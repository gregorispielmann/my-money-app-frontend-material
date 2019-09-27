import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../auth/authActions'

class Navbar extends React.Component { 

render(){
    
  if(!this.props.user)
  return false
  const { name, email } = this.props.user

  return(
  <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
  <div className="container-fluid">
    <div className="navbar-wrapper">
      <a className="navbar-brand" href="\#"><i className="material-icons">home</i></a>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
      <span className="sr-only"></span>
      <span className="navbar-toggler-icon icon-bar"></span>
      <span className="navbar-toggler-icon icon-bar"></span>
      <span className="navbar-toggler-icon icon-bar"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end">
      <div className="navbar-form">
      </div>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
        <a className="nav-link" href="/" onClick={(e) => e.preventDefault() } id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="">{email}</span>
          <span> | </span>
          <span className="">{name}</span>
          <i className="material-icons">person</i>
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
          <a className="dropdown-item" href="\#" onClick={this.props.logout}>Log out</a>
        </div>
      </li>
      </ul>
    </div>
  </div>
  </nav>

  )
}
}

const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)