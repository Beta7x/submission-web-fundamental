import { create, cssomSheet } from 'twind'

const sheet = cssomSheet({ target: new CSSStyleSheet() })
const { tw } = create({ sheet })

class AppBar extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
}

connectedCallback() {
    this.render();
}

render() {
    this.shadow.adoptedStyleSheets = [sheet.target]
    this.shadow.innerHTML = `
    <header class="${tw`w-screen h-[75px] bg-[#00a75f]`}">
        <nav class="${tw`flex px-10 items-center w-full h-full justify-between`}">
            <div class="${tw`flex items-center`}">
                <a href="/">
                    <h1 class="${tw`text-4xl font-bold text-[#9FEF00]`}">FooDies</h1>
                </a>
            </div>
        </nav>
    </header>
    `
  }
}

customElements.define('app-bar', AppBar)