import './toolbar-65780c81.js';

var about = customElements.define('pyrabank-about-view', class extends HTMLElement {
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
      }
      
      .background-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
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
      
      a {
        color: #fff;      
      }
    </style>
      
        <span class="hero">
          <span class="column">
            <span class="wrapper">
              <h3>License</h3>
              
              <p><strong>©</strong> 2019 - 2020 Pyrabank. Code licensed under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC-BY-NC-SA-4.0</a> License. Except as otherwise noted, Documentation & media are licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a> License.</p>
              
              <h3>Disclaimer</h3>
              
              <p>This application has been made for entertainment purposes and should be considered as such. No guarantees or warranties are given. Pyrabank is an entertainment platform, not an investment platform.</p>
              
              
            </span>
          </span>
      </span>
    `
  }
});

export default about;
