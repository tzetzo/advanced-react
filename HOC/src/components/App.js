import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import {changeAuth} from 'actions'

class App extends Component {
  renderButton() {
    if(this.props.auth){
      return (
        <button onClick={() => this.props.changeAuth(false)}>
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>
          Sign In
        </button>
      )
    }
  }

  renderHeader() {
      return (
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/post'>Post a Comment</Link>
          </li>
          <li>
            {this.renderButton()}
          </li>
        </ul>
      )
  }

  render(){
    return (
      <div>
        {this.renderHeader()}
        <Route exact path="/" component={CommentList} />
        <Route path="/post" component={CommentBox} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {auth: state.auth}
}

export default connect(mapStateToProps, {changeAuth})(App)
