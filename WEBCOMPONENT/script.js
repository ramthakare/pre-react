class UserDetail extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "this is our first webcomponent";
  }
}

window.customElements.define("user-detail", UserDetail);
