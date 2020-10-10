var home = customElements.define('pyragame-home-view', class PyragameHomeView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }
  
  connectedCallback() {
    // this.game = globalThis.pyrabank.game
  }
  
  set game(value) {
    fetch(`./../assets/logo/${this.logos[pyrabank.game]}.svg`).then(async response => {
      console.log(response.status);
      if (response.status === 404) this._img.src = `./../assets/logo/${this.logos[pyrabank.game]}.png`;
      else this._img.src = `./../assets/logo/${this.logos[pyrabank.game]}.svg`;
    });
    this.shadowRoot.querySelector('game-text[event="balance"]');
  }
  
  get template() {
    return `<style>          
      :host {
        flex-direction: column;
        color: #eee;
        
        background: var(--light-primary-color);
      }
      
      :host, .row {
        display: flex;
        user-select: none;
        pointer-events: none;
      }
      
      .row {
        flex-direction: row;
        width: 100%;
      }
      
      img {
        width: 100%;
        height: 100%;
        max-width: 300px;
        max-height: 300px;
      }
      
      .background-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // background-image: linear-gradient(170deg, rgba(50,81,51,0.89) 31%, rgba(209,165,20,0.76) 74%);
        opacity: 0.34;
        display: flex;       
        flex-direction: column; 
        background-image: url(../assets/diamond.svg);
        
        background-color: var(--light-primary-color);
        align-items: center;
        justify-content: center;
      }
      
    </style>
    <span class="background-overlay">
      <span class="row">
        <h4>Total Balance</h4>
        <game-text event="balance"></game-text>
      </span>
      <span class="row">
        <h4>Staked Balance</h4>
        <game-text event="staked"></game-text>
      </span>
    </span>
    
    `
  }
});

export default home;
