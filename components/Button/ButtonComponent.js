class ButtonComponent extends Component {
  template() {
    return `
      <style>
        .button {
          cursor: pointer;
          background: #ccc;
          padding: 1rem;
          border: 0;
          border-radius: 0.4rem;
        }

        .button:hover {
          background: #999;
        }
      </style>

      <button class="button">${this.getAttribute("label")}</button>
    `;
  }
}

customElements.define("button-component", ButtonComponent);
