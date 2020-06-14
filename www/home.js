import './toolbar-65780c81.js';

var home = customElements.define('pyrabank-home-view', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }
  
  get template() {
    return `
    <style>
      :host {
        display: flex;
        flex-direction: column;
        color: var(--primary-text-color);
        font-size: 23px;
        overflow: hidden;
        overflow-y: auto;
        box-sizing: border-box;
        padding: 24px;
      }
      
      .welcome {        
        color: #bcaa4d;
        background: #fff;
        background-image: url(https://pyrabank.com/wp-content/uploads/2019/11/background-orange100.png);
      }
      .background-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(170deg, rgba(50,81,51,0.89) 31%, rgba(209,165,20,0.76) 74%);
        opacity: 0.89;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      section {
        position: relative;
        width: 100%;
        height: 100%;
        background-position: bottom center;
        background-repeat: no-repeat;
        background-size: auto;
      }
      
      h1, h2 {
        margin: 0;
        font-weight: 600;
        width: fit-content;
      }
      
      h1 {
        color: #d1cf62;
        font-size: 58px;
        letter-spacing: -2px;
      }
      
      h2 {
        font-size: 30px;
      }
      
      p {
        line-height: 1;
        max-width: 780px;
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
      
      img {
        max-height: 40%;
        max-width: 40%;
      }
    </style>
    <section class="welcome">
      
      <span class="background-overlay">
        <span class="hero">
          <span class="column">
            <span class="wrapper">
              <h1>Welcome to decentralized finance</h1>
              <h2>No more losing to price manipulation</h2>
              
              <p>The first hourglass that enables you to create stable savings by giving you the ability to invest and reinvest your earnings,
              without any possibility of losing more than the fees you paid.</p>
              <p>Enter first, middle or last, your token value will not crash no matter how many sell - you just sit back and collect dividends from every interaction with the platform.</p>
            </span>
            <img class="right" src="https://pyrabank.com/wp-content/uploads/2019/10/logo-transparent-1-2-1.png"></img>
          </span>
        </span>
      </span>
    </section>
    `
  }
});

export default home;
