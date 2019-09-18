import React from "react";

import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login, signup } from "../auth/authActions";

import Messages from "../msg/Messages";
import InputField from "../common/widgets/FormSignUp/InputField";

import '../assets/css/custom.css'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loginMode: true };
  }

  changeMode() {
    this.setState({ loginMode: !this.state.loginMode });
  }

  onSubmit(values) {
    // console.log('onsubmit values', values)
    const { login, signup } = this.props;
    this.state.loginMode ? login(values) : signup(values);
  }

  render() {
    const { loginMode } = this.state;
    const { handleSubmit } = this.props;

    return (
      <div className="login">
        <div className="col-3"></div>
        <div className="col-6">
        <h1 className="card-title">My Money App</h1>
          <div className="card card-nav-tabs mt-5">
            <h4 className="card-header card-header-info">{ loginMode ? 'Login' : 'Cadastro' }</h4>
            <div className="card-body">
              <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                <Field component={InputField} type='input' name='name' placeholder='Nome' hide={loginMode}></Field>
                <Field component={InputField} type='email' name='email' placeholder='E-mail'></Field>
                <Field component={InputField} type='password' name='password' placeholder='Senha'></Field>
                <Field component={InputField} type='password' name='confirm_password' placeholder='Confirmar Senha' hide={loginMode}></Field>
                <button type="submit" className="btn btn-primary">
                  { loginMode ? 'Entrar' : 'Registrar' } 
                </button>
              </form>
            </div>
          </div>
          <a onClick={ () => this.changeMode()} href="\#">
            {loginMode ? 'Novo usuário? Registre-se!' : 'Já é cadastrado? Entrar aqui!'}
          </a>
        </div>
        <div className="col-3">
          <Messages></Messages>
        </div>
      </div>
    );
  }
}

Login = reduxForm({ form: "LoginForm" })(Login);
const mapDispatchToProps = dispatch =>
  bindActionCreators({ login, signup }, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(Login);
