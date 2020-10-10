export default customElements.define('pyrabank-toolbar', class extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
  }
  
  get template() {
    return `
    <style>
      :host {
        --toolbar-height: 48px;
        display: flex;
        flex-direction: row;
        align-items: center;
        background: var(--dark-primary-color);
        height: var(--toolbar-height);
        padding: 0 8px;
        background-image: url(assets/diamond.svg);
        
        background-color: var(--light-primary-color);
      }
      
      .flex {
        flex: 1;
      }
    </style>
      <slot name="left"></slot>
      <span class="flex"></span>
      <slot></slot>
      <span class="flex"></span>
      <slot name="right"></slot>
    `
  }
})