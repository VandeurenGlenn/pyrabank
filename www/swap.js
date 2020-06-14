import './toolbar-65780c81.js';
import './custom-tabs-b19e1abb.js';

var swap = customElements.define('pyrabank-swap-view', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }
  
  get _iframe() {
    return this.shadowRoot.querySelector('iframe')
  }
  
  connectedCallback() {
    this._iframe.src = 'https://widget.changelly.com?currencies=*&amp;from=btc&amp;to=trx&amp;amount=1&amp;address=&amp;fiat=true&amp;fixedTo=false&amp;theme=deep-purple&amp;merchant_id=p08ury2lnzzuygjz&amp;payment_id="';
  }
  get template() {
    return `
    <style>
      :host {
        display: flex;
        flex-direction: column;
        color: var(--primary-text-color);
        font-size: 22px;
        overflow: hidden;
        overflow-y: auto;
        background: var(--light-primary-color);
        align-items: center;
        justify-content: center;
      }
      
      iframe {
        width: 100%;
        height: 100%;
        max-width: 568px;
        max-height: 452px;
        width: 100%;
        overflow-y: hidden;
        border: none;
      }
    </style>
        
    <iframe scrolling="no">Can't load widget</iframe>
    `
  }
});

export default swap;
