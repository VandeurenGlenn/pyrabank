import './../elements/game-item'

export default customElements.define('pyrabank-games-view', class extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
  }
  
  connectedCallback() {
    this.addEventListener('click', event => {
      const name = event.composedPath()[0].name
      globalThis.open(`${location.origin}/game/#!/home?game=${name}`)
    })
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
        background-image: url(assets/diamond.svg);
        
        background-color: var(--light-primary-color);
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
        pointer-events: auto;
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
    <span class="background-overlay"></span>
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
})