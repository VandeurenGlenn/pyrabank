import './../header'
import './../toolbar'
import './../button'

export default customElements.define('pyrabank-home-view', class extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    const script = document.createElement('script')
    script.src = './third-party/typed.min.js'
    script.onload = () => {
      const typers = [
        [this.shadowRoot.querySelector('.welcome-title'), ['welcome to', 'Privatebank']],
        [this.shadowRoot.querySelector('.welcome-helper'), ['Decentralized Finance', 'No More Losing To Price Manipulation', 'No More Price Manipulation']]
      ]
      
      const helperTypers = [        
        
      ]
  
        new Promise(() => typers.map(type => new Typed(type[0], {
          // stringsElement: type[1],
          strings: type[1],
          typeSpeed: 0,
          backSpeed: 0,
          backDelay: 1100,
          startDelay: 0,
          loop: false,
          showCursor: false
        })))
    }
    document.head.appendChild(script)
    this.shadowRoot.innerHTML = this.template
  }
  
  connectedCallback() {
    this.addEventListener('click', event => {
      const target = event.composedPath()[0]
      console.log(target);
      const parts = target.dataset.event.split('.')
      if (parts[0]) pubsub.publish(parts[0], parts[1])
    })
      
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
        background-image: url(assets/diamond.svg);
        
        background-color: var(--light-primary-color);
      }
      section {
        position: relative;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
      }
      
      h1, h2, .welcome-title {
        margin: 0;
        font-weight: 600;
        width: fit-content;
      }
      
      h1, .welcome-title {
        color: #cad2ff;
        font-size: 48px;
        letter-spacing: -2px;
      }
      
      h2 {
        font-size: 24px;
      }
      
      p {
        line-height: 1;
        max-width: 780px;
      }
      
      .hero {
        width: 100%;
        max-width: 1200px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 24px 0;
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
      
      .flex {
        flex: 1;
      }
      
      .row {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .welcome-section {
        padding-bottom: 124px;
      }
      pyrabank-button[icon="info"] {
        margin-bottom: 12px;
      }
      @media(min-width: 540px) {
        .row {
          flex-flow: row wrap;
          justify-content: space-around;
        }
        pyrabank-button[icon="info"] {
          margin-bottom: 0;
        }
        .hero {
          padding: 24px;
        }
      }
    </style>
    
    <section class="welcome">
        <span class="hero">
          <span class="column">
            <span class="wrapper">
              <span class="column welcome-section">
                <img class="right" alt="Privatebank logo" src="./assets/img/privatebank.webp"></img>
                <span class="column" style="height: 92px">
                  <h2 class="welcome-title" style="height: 101px"></h2>
                  <h2 class="welcome-helper"></h2>
                </span>
              </span>
            
              <span class="row">
                <pyrabank-button icon="info" data-event="go.info">learn more</pyrabank-button>
                <span class="flex"></span>
                <pyrabank-button icon="videogame-asset" data-event="go.games">games</pyrabank-button>
              </span>
              
            </span>
          </span>
        </span>
    </section>
    `
  }
})