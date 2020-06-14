import './../header'
import './../toolbar'

export default customElements.define('pyrabank-media-view', class extends HTMLElement {
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
        flex-direction: column;
        color: var(--primary-text-color);
        font-size: 23px;
        overflow: hidden;
        overflow-y: auto;
        background: var(--light-primary-color);
      }
      
      
      section {
        position: relative;
        width: 100%;
        height: 100%;
        background-position: bottom center;
        background-repeat: no-repeat;
        background-size: auto;
        padding: 24px;
        box-sizing: border-box;
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
      
      img {
        max-height: 50%;
        max-width: 50%;
      }
      
      iframe {
        border: none;
        width: 100%;
        height: 100%;
      }
    </style>
    <section class="portfolio">
              <iframe src="https://www.youtube.com/embed/3qoY2EtT6lU?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0"></iframe>

    </section>
    `
  }
})