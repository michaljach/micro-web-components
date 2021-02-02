class AppContainer extends Component {
  constructor() {
    super();

    this.shadowRoot
      .getElementById("hello")
      .addEventListener("click", this.onClick);
  }

  onClick() {
    alert("Hello!");
  }

  template() {
    return `
      <style>
        @import url('https://rsms.me/inter/inter.css');

        :host {
          font-family: 'Inter', sans-serif;
        }
      </style>

      <h1>Vanilla JS Micro framework</h1>
      <button-component id="hello" label="Click me!"></button-component>
    `;
  }
}

customElements.define("app-container", AppContainer);
