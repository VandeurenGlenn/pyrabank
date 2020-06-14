import './../elements/game-item'

export default customElements.define('pyrabank-games-view', class extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
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
      }
      
      section {
        position: relative;
        width: 100%;
        height: 100%;
        background-position: bottom center;
        background-repeat: no-repeat;
        background-size: auto;
        padding: 24px;
      }
      
      h1, h2 {
        margin: 0;
        font-weight: 600;
        width: fit-content;
      }
      
      h1 {
        color: #30a1b285;
        font-size: 58px;
        letter-spacing: -2px;
      }
      
      h2 {
        color: #30a1b285;
        font-size: 32px;
      }
      
      h3 {
        font-size: 24px;
        font-style: italic;
      }
      
      p {
        line-height: 1.5;
        font-weight: 200;
        max-width: 780px;
        font-size: 18px;
      }
      
      .hero {
        width: 100%;
        max-width: 1200px;
        box-sizing: border-box;
        padding: 24px;
        display: flex;
        flex-direction: column;
      }
      
      .column {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
        overflow: hidden;
        overflow-y: auto;
        max-height: 492px;
        max-width: 980px;
        height: 100%;
        width: 100%;
      }
      
      img {
        max-height: 50%;
        max-width: 50%;
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
    
    <game-item name="HEX3D"></game-item>
    </span>
    `
  }
})