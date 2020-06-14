import './toolbar-65780c81.js';

var info = customElements.define('pyrabank-info-view', class extends HTMLElement {
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
        align-items: center;
        justify-content: center;
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
        height: 100%;
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
        max-height: 50%;
        max-width: 50%;
      }
    </style>
        <span class="hero">
          <span class="column">
            <span class="wrapper">
              <h2>Build your portfolio fearlessly with PyraBank</h2>
              <h3>What is PyraBank?</h3>
              
              <p>PyraBank is a decentralized application on the TRON network. It was created to provide holders of its tokens with a safe and consistent supply of dividends. The Pyra token is stable and holds its TRX value innately and immutably through the use of an open ledger, automated and decentralized smart contract. This means that the funds on the PyraBank exchange are protected by verified programming hosted on the TRON Virtual Machine and cannot be tampered with by anybody, even its creators. Can your bank say that?</p>
              
              <h3>Why should I care?</h3>
              
              <p>The stable nature of Pyra allows players to properly gauge their earning strategy without needing to worry about factoring for pump and dump price fluctuations. PyraBank means you can make the most possible dividends with the lowest possible risk, from some of the most popular games in the crypto gaming space. It goes without saying that robots are a lot more honest than your average run-of-the-mill bank, especially when it comes to what happens to your money once you’ve deposited it.</p>
              
              <h3>How does it work?</h3>
              
              <p>
                The smart contract will deduct a fee for every purchase and sale of Pyra, split it among token holders, and store user funds safely and independently of an intermediate authority. PyraBank will also be funded through the purchase of its tokens via an ecosystem of decentralized applications built to sustain the network and reward Pyra holders. Having a stable token means you can earn dividends from an entire crypto gaming ecosystem without worrying that your holdings will lose value from the actions of other users. No matter what other players do, every interaction with PyraBank and its games provides earnings in TRX directly to each and every Pyra holder. Nobody will ever be punished for holding.
              </p>
            </span>
          </span>
        </span>
    `
  }
});

export default info;
