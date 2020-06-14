import './../header'
import './../toolbar'
import './../../node_modules/custom-tabs/custom-tab'
import './../../node_modules/custom-tabs/custom-tabs'

export default customElements.define('pyrabank-guide-view', class extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
    
    this._selected = this._selected.bind(this)
  }
  
  get pages() {
    return this.shadowRoot.querySelector('custom-pages')
  }
  
  get tabs() {
    return this.shadowRoot.querySelector('custom-tabs')
  }
  
  connectedCallback() {
    this.tabs.addEventListener('selected', this._selected)
  }
  
  _selected({detail}) {
    this.pages.select(detail)
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
      
      .text-container {
        pointer-events: none;
        user-select: none;
        outline: none;
      }
      
      custom-tabs {
        max-width: 568px;
        width: 100%;
      }
      
      custom-tab {
        text-transform: uppercase;
        --tab-underline-color: #ff9900;
      }
      
      custom-pages {
        max-width: 568px;
        width: 100%;
        height: 256px;
        flex: none;
        background: #2c2c2c;
      }
      
      section {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0 24px 24px 24px;
      }
      
      p {
        
        line-height: 34px;
        font-weight: 200;
      }
      
      a {
        color: #ff9900;
      }
      
      .flex {
        flex: 1;
      }
    </style>
    
    <custom-tabs attr-for-selected="data-route">
      <custom-tab data-route="join">
        <span class="text-container">join</span>
      </custom-tab>
    
      <custom-tab data-route="acquire">
        <span class="text-container">acquire</span>
      </custom-tab>
      
      <custom-tab data-route="fund">
        <span class="text-container">fund</span>
      </custom-tab>
      
      <custom-tab data-route="access">
        <span class="text-container">access</span>
      </custom-tab>
      
      <custom-tab data-route="participate">
        <span class="text-container">participate</span>
      </custom-tab>
    </custom-tabs>
    
    <custom-pages attr-for-selected="data-route">
      <section data-route="join">
        <p>
          Create a Tron wallet and interact with PyraBank.
        </p>
        
        <span class="flex"></span>
        
        <small>
          You can do this by using the Tronlink browser extension or mobile wallet, which can be found on their website at Tronlink.org.
        </small>
      </section>
      
      <section data-route="acquire">
        <p>
          Purchase TRON with crypto or fiat through your exchange of choice or using the changelly section/widget.
        </p>
        
        <span class="flex"></span>
        
        <small>
           If you don’t know which exchange to use, you can check which exchanges Tron (TRX) is traded on by using CoinMarketCap.com.
        </small>
      </section>
      
      <section data-route="fund">
        <p>
          Withdraw your coins to the wallet you wish to engage with the PyraBank platform from.
        </p>
        
        <span class="flex"></span>
        
        <small>
          The wallet you purchase Pyra from serves as your account and will be the only one that can access and interact with its PyraBank holdings.
        </small>
      </section>
      
      <section data-route="access">
        <p>
          Click the Exchange button on our website’s header, or go to <a href="https://pyrabank.com/dash">PyraBank.com/dash</a>.
        </p>
        
        <span class="flex"></span>
        <small>
          You must be logged into your wallet and allow it to connect to PyraBank in order to engage with the contract and view your holdings through the interface.
        </small>
      </section>
      
      <section data-route="participate">
        <p>
        Follow the instructions on the dashboard to purchase your Pyra.
        </p>
        
        <span class="flex"></span>
        
        <small>
          You are now part of one of the most stable earning platforms on Web 3.0 and will receive dividends from the entire PyraBank ecosystem.
        </small>
      </section>
    </custom-pages>
    
    <iframe src="https://widget.changelly.com?currencies=*&amp;from=btc&amp;to=trx&amp;amount=1&amp;address=&amp;fiat=true&amp;fixedTo=false&amp;theme=deep-purple&amp;merchant_id=p08ury2lnzzuygjz&amp;payment_id=" width="100%" height="100%" class="changelly" scrolling="no" onload="function ce(e){var t=e.target,n=t.parentNode,r=t.contentWindow,o=function(){return r.postMessage({width:n.offsetWidth},U.url)};window.addEventListener('resize',o),o()};ce.apply(this, arguments);" style="max-width: 568px; max-height: 452px; width: 100%; overflow-y: hidden; border: none">Can't load widget</iframe>
    `
  }
})