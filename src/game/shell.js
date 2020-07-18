import './../shared-imports'

export default customElements.define('game-shell', class extends HTMLElement {
  
  static get observedAttributes() {
    return ['desktop']
  }
  
  get _selector() {
    return this.shadowRoot.querySelector('custom-selector')
  }
  
  get _pages() {
    return this.shadowRoot.querySelector('custom-pages')
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue
  }
  
  get _drawer() {
    return this.shadowRoot.querySelector('pyrabank-drawer')
  }
  
  set desktop(value) {
    if (value) this._drawer.setAttribute('opened', '')
    else this._drawer.removeAttribute('opened')
  }
  
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
    
    this._selected = this._selected.bind(this)
    this._onHashChange = this._onHashChange.bind(this)
  }
  
  connectedCallback() {
    this._init()
  }
  
  async _init() {
    
    this._selector.addEventListener('selected', this._selected)
    
    globalThis.onhashchange = this._onHashChange
    
    this._onHashChange()
    
    const updatePlatform = ({matches}) => {
      if (matches) {
        this.setAttribute('desktop', false)
        if (this._userOpened) return
        
        this._drawer.removeAttribute('opened')
      }
      else this.setAttribute('desktop', true)
    }
    
    const desktop = globalThis.matchMedia('(max-width: 1020px)')
    updatePlatform(desktop)
    desktop.addListener(updatePlatform)
  }
  
  async _selected({detail}) {
    if (!await customElements.get(`pyragame-${detail}-view`)) await import(`./${detail}.js`)
    this._pages.select(detail)
    
    location.hash = `#!/${detail}`
  }
  
  async _onHashChange() {
    const parts = location.hash.split('/?')
    const query = parts[1]
    let hash = parts[0]
    
    if (query) {
      let prevIndex;
      const params = {}
      const parts = query.split('=')
      for (const param of parts) {
        const index = parts.indexOf(param)
        if (index !== prevIndex + 1) {
          const value = parts[index + 1]
          params[param] = value
        }
        prevIndex = index
      }
      if (Object.keys(params).length > 0) {
        if (params.game) {
          globalThis.pyrabank = globalThis.pyrabank || {}
          pyrabank.game = params.game
        }
      }
    }
    hash = hash.replace('#!/', '')
    if (!hash) hash = 'home'
    if (!await customElements.get(`pyragame-${hash}-view`)) await import(`./${hash}.js`)
    this._pages.select(hash)
    this._selector.selected = hash
  }
  
  get template() {
    return `
    <style>
    :host {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      --svg-icon-color: #F9AA33;
      
      background: var(--light-primary-color);
    }
    .container {
      position: absolute;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      right: 0;
      bottom: 0;
      top: 0;
    }
    :host([desktop="true"][drawer-opened]) .container {
      width: calc(100% - 256px);
    }
    
    :host([desktop="false"]) {
      
    }
    
    .link {
      display: flex;
      padding: 12px 24px;
      box-sizing: border-box;
      align-items: center;
      cursor: pointer;
      color: #d1cf62;
      text-transform: uppercase;
    }
    
    img[slot="top"] {
      width: 256px;
      margin-top: -44px;
    }
    
    custom-selector {
      top: -90px;
      position: relative;
    }
    
    .flex {
      flex: 1;
    }
    
    .link.custom-selected {
      background: #ff9900;
      color: #fff;
      --svg-icon-color: #fff;
    }
    
    a {
      color: #fff;      
    }
    
    
  </style>
  
  <custom-svg-iconset>
    <defs>
      <svg>
        <g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
        <g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
        <g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
        <g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
        <g id="local-library"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path></g>
        <g id="media"><path d="M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z"></path></g>
        <g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
        <g id="people"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></g>
        <g id="person"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g>
        <g id="videogame-asset"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
        <g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
        <g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
      </svg>
    </defs>
  </custom-svg-iconset>
    <pyrabank-drawer>
    
    <img slot="top" class="right" src="./../assets/img/logo-transparent.webp"></img>
      <custom-selector attr-for-selected="data-route" slot="content">
        <span class="link" data-route="home">
          <custom-svg-icon icon="home"></custom-svg-icon>
          <span class="flex"></span>
          home
        </span>
        
        <span class="link" data-route="info">
          <custom-svg-icon icon="info"></custom-svg-icon>
          <span class="flex"></span>
          info
        </span>
        
        <span class="link" data-route="about">
          <custom-svg-icon icon="help"></custom-svg-icon>
          <span class="flex"></span>
          about
        </span>
        
        <span class="link" data-route="media">
          <custom-svg-icon icon="media"></custom-svg-icon>
          <span class="flex"></span>
          media
        </span>
        
        <span class="link" data-route="games">
          <custom-svg-icon icon="videogame-asset"></custom-svg-icon>
          <span class="flex"></span>
          games
        </span>
        
        <span class="link" data-route="guide">
          <custom-svg-icon icon="local-library"></custom-svg-icon>
          <span class="flex"></span>
          guide
        </span>
        
        <span class="link" data-route="swap">
          <custom-svg-icon icon="compare-arrows"></custom-svg-icon>
          <span class="flex"></span>
          swap
        </span>
      </custom-selector>
    </pyrabank-drawer>
    
    <span class="container">
      
      <custom-pages attr-for-selected="data-route">
        <pyragame-home-view data-route="home"></pyragame-home-view>
        
        <pyragame-about-view data-route="about"></pyragame-about-view>
        
        <pyragame-info-view data-route="info"></pyragame-info-view>
        
        <pyragame-media-view data-route="media"></pyragame-media-view>
        
        <pyragame-games-view data-route="games"></pyragame-games-view>
        
        <pyragame-guide-view data-route="guide"></pyragame-guide-view>
        
        <pyragame-swap-view data-route="swap"></pyragame-swap-view>
      </custom-pages>
    </span>
    `
  }
})