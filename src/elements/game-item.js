import symbols from './../data/symbols'

export default customElements.define('game-item', class extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
  }
  
  get _name() {
    return this.shadowRoot.querySelector('.name')
  }
  
  get _symbol() {
    return this.shadowRoot.querySelector('.symbol')
  }
  
  get _img() {
    return this.shadowRoot.querySelector('img')
  }
  connectedCallback() {
    const name = this.getAttribute('name')
    if (name) {
      const symbol = symbols[name]
      this._name.innerHTML = name
      this._symbol.innerHTML = symbol
      
      // this._img.alt = symbol
      this._img.src = `./assets/logo/${symbol}.svg`
    }
  } 
  
  get template() {
    return `
    <style>
      :host {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        
        min-height: 164px;
        max-height: 164px;
        min-width: 320px;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 12px;
      }
      
      .column {
        background: rgba(255, 255, 255, 0.32);
        padding: 12px;
        width: 100%;        
        // max-height: 124px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      img {
        width: 48px;
        height: 48px;
        
        padding-bottom: 12px; 
      }
      
      h5 {
        margin: 0;
      }
    </style>
    
    <span class="column"> 
    <img></img>
       
      <h5 class="name"></h5>
      <h5 class="symbol"></h5>
    </span>

    `
  }
})