import React, { Component } from 'react';

import HomepagePresenter from './homepage.presenter';

import './homepage.css';

class HomepageView extends Component {
  constructor(props) {
    super(props);
    this.presenter = new HomepagePresenter();
    this.presenter.setView(this);
  }

  handleLogin = (e) => {
    this.presenter.handleLogin();
  }

  redirectToLoginPage = () => {
    let {transition} = this.props;
    transition.router.stateService.go('login', {}, {});
  }

  render() {
    return (
      <div>
        <div className="topbar">
          <button className="login-btn" onClick={this.handleLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default HomepageView;
