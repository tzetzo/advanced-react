import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps);
  }

  render() {

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field name="email" type="text" component="input" autoComplete="none" />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name="password" type="password" component="input" autoComplete="none" />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign up</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {errorMessage: state.auth.errorMessage}
}

export default compose( //apply multiple HOCs to a single Component
  connect(mapStateToProps, actions),
  reduxForm({form: 'signup'})
)(Signup);
