export default customElements.define('pyragame-data', class PyragameData extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'})
    
    this.shadowRoot.innerHTML = this.template
  }
  get template() {
    return `<style>
      :host {
        display: block;
      }
    </style>`
  }
});