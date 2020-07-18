import symbols from './../data/symbols'

export default customElements.define('game-item', class extends HTMLElement {
  
  static get observedAttributes() {
    return ['name']
  }
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
  
  set name(value) {
    if (value) {
      const symbol = symbols[value]
      this._name.innerHTML = value
      this._symbol.innerHTML = symbol
      
      // check if we have an svg logo
      // fallsback to png
      fetch(`./assets/logo/${symbol}.svg`).then(async response => {
        if (response.status === 404) this._img.src = `./assets/logo/${symbol}.png`
        else this._img.src = `./assets/logo/${symbol}.svg`
      })
    }
    
    this.setAttribute('name', value)
  }
  
  get name() {
    return this.getAttribute('name')
  }
  
  attributeChangedCallback(name, oldValue, value) {
    if (oldValue !== value) this[name] = value
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
        pointer-events: auto;
        cursor: pointer;
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
        pointer-events: none;
      }
      
      img {
        width: 48px;
        height: 48px;
        
        padding-bottom: 12px;
        pointer-events: none;
      }
      
      h5 {
        margin: 0;
        pointer-events: none;
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