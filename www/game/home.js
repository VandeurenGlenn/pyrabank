var home = customElements.define('pyragame-home-view', class PyragameHomeView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }
  
  connectedCallback() {
    this.game = pyrabank.game;
  }
  
  get _img() {
    return this.shadowRoot.querySelector('.logo')
  }
  
  set game(value) {
    fetch(`./../assets/logo/${value}.svg`).then(async response => {
      console.log(response.status);
      if (response.status === 404) this._img.src = `./../assets/logo/${value}.png`;
      else this._img.src = `./../assets/logo/${value}.svg`;
    });
    
    this.shadowRoot.querySelector('game-text[event="balance"]').innerHTML = value;
  }
  
  get template() {
    return `<style>          
      :host {
        flex-direction: column;
      }
      
      :host, .row {
        display: flex;
        user-select: none;
        pointer-events: none;
      }
      
      .row {
        flex-direction: row;
      }
      
      img {
        width: 100%;
        height: 100%;
        max-width: 300px;
        max-height: 300px;
      }
      
    </style>
    <span class="row">
      <img class="logo"></img>
      <h4>Total Balance</h4>
      <game-text event="balance"></game-text>
      <h4>Staked Balance</h4>
      <game-text event="staked"></game-text>
    </span>
    
    `
  }
});

export default home;
