import './../node_modules/custom-svg-icon/src/custom-svg-icon'

export default customElements.define('pyrabank-button', class PyrabankButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
  }
  
  get icon() {
    return this._icon || this.getAttribute('icon')
  }
  
  set icon(value) {
    this._icon = value
  }
  
  get iconTemplate() {
    if (!this.icon) return ''    
    return `<custom-svg-icon icon="${this.icon}"></custom-svg-icon><span class="flex"></span>`
  }
  
  get template() {
    return `<style>    
      * {
        pointer-events: none;
      }
      
      :host {
        --pyra-button-height: 64px;
        --pyra-button-width: 224px;
        display: block;
        height: 64px;
        width: 224px;
        pointer-events: auto;
        cursor: pointer;
      }
      
      .flex {
        flex: 1;
      }
      
      button {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0 24px;
        height: 64px;
        width: 224px;
        border-color: #fff;
        border-radius: 32px;
        background: linear-gradient(90deg, #2b2b33c2 0%, #211f1eeb 100%);
        text-transform: uppercase;
        font-weight: 800;
        color: #bcaa4d;
        user-select: none;
        overflow: hidden;
        outline: none;
      }
    </style>
    <button>
      ${this.iconTemplate}
      <slot></slot>
    </button>
    `
  }
});