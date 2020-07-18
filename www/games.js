var symbols = {
  Tron: 'TRX',
  BitTorrent: 'BTT',
  BeatzCoin: 'BTZC',
  Ethereum: 'ETH',
  'Basic Attention Token': 'BAT',
  HEX: 'HEX',
  GHOST: 'GHOST',
  HEX2T: 'HEX2T',
  HEX3D: 'HEX3D',
  HEX2X: 'HEX2X'
};

customElements.define('game-item', class extends HTMLElement {
  
  static get observedAttributes() {
    return ['name']
  }
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
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
      const symbol = symbols[value];
      this._name.innerHTML = value;
      this._symbol.innerHTML = symbol;
      
      // check if we have an svg logo
      // fallsback to png
      fetch(`./assets/logo/${symbol}.svg`).then(async response => {
        if (response.status === 404) this._img.src = `./assets/logo/${symbol}.png`;
        else this._img.src = `./assets/logo/${symbol}.svg`;
      });
    }
    
    this.setAttribute('name', value);
  }
  
  get name() {
    return this.getAttribute('name')
  }
  
  attributeChangedCallback(name, oldValue, value) {
    if (oldValue !== value) this[name] = value;
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
});

var games = customElements.define('pyrabank-games-view', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }
  
  connectedCallback() {
    this.addEventListener('click', event => {
      const name = event.composedPath()[0].name;
      globalThis.open(`${location.origin}/game/#!/home/?game=${name}`);
    });
  }
  
  get template() {
    return `
    <style>
      :host {
        display: flex;
        color: var(--primary-text-color);
        font-size: 23px;
        overflow: hidden;
        overflow-y: auto;
        background: var(--light-primary-color);
        justify-content: center;
        align-items: center;
        pointer-events: none !important;
      }
      
      .container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
        overflow: hidden;
        overflow-y: auto;
        max-height: 660px;
        max-width: 980px;
        height: 100%;
        width: 100%;
        pointer-events: none;
      }
      
      @media (min-width: 680px) {
        game-item {
          width: calc(100% / 3);
        }
      }
      
      @media (max-width: 1250px) {
        .container {
          max-height: 100%;
          height: 100%;
        }
      }
      
      @media (min-width: 1200px) {
        game-item {
          width: calc(100% / 4);
        }
      }
      
      @media (min-width: 1400px) {
        game-item {
          width: calc(100% / 5);
        }
      }
      
    </style>
    
    <span class="container">
      <game-item name="Tron"></game-item>
      
      <game-item name="BitTorrent"></game-item>
      
      <game-item name="BeatzCoin"></game-item>
      
      <game-item name="HEX"></game-item>
      
      <game-item name="Ethereum"></game-item>
      
      <game-item name="Basic Attention Token"></game-item>
      
      <game-item name="GHOST"></game-item>
      
      <game-item name="HEX2T"></game-item>
      
      <game-item name="HEX2X"></game-item>
      
      <game-item name="HEX3D"></game-item>
    </span>
    `
  }
});

export default games;
