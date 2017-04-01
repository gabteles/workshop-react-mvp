class HomepagePresenter {
  setView(view) {
    this.view = view;
  }

  handleLogin() {
    this.view.redirectToLoginPage();
  }
}

export default HomepagePresenter;
