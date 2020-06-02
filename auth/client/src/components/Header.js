import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  // state = {};

  // static getDerivedStateFromProps(props,state) {}; static propTypes = {onHandleSubmit: PropTypes.func}; static defaultProps = {message: 'Loading...'}
  // componentDidMount() {}
  // shouldComponentUpdate(nextProps, nextState) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // componentDidUpdate(prevProps, prevState, snapshot) {}
  // componentWillUnmount() {}
  // click handlers or event handlers like onClickSubmit() or onChangeDescription()
  // getter methods for render like getSelectReason() or getFooterContent()
  // optional render methods like renderNavigation() or renderProfilePicture()

  render() {
    return (
      <div>
        <Link to='/'>Redux Auth</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/signin'>Sign In</Link>
        <Link to='/signout'>Sign Out</Link>
        <Link to='/feature'>Feature</Link>
      </div>
    );
  }

}

export default Header;
