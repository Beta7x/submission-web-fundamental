import { create, cssomSheet } from 'twind';

const sheet = cssomSheet({ target: new CSSStyleSheet() })
const { tw } = create({ sheet })

class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open"});
    }

    connectedCallback() {
        this.render();
    }
    
    set clickEvent(event) {
        this._clcikEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.adoptedStyleSheets = [sheet.target]
        this.shadowDOM.innerHTML = `
        <form class="${tw`pt-2.5 pb-5 px-56 fixed w-full top-0`}">   
            <label for="default-search" 
                class="${tw`mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white`}">Search</label>
            <div class="${tw`relative`}">
                <div class="${tw`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none`}">
                    <svg aria-hidden="true" 
                        class="${tw`w-5 h-5 
                            text-gray-500 
                            dark:text-gray-400`}" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" 
                    id="searchElement" 
                    class="${tw`block w-full 
                        p-4 pl-10 text-sm 
                        text-gray-900 border 
                        border-gray-300 rounded-lg 
                        bg-gray-50 
                        focus:ring-blue-500 
                        focus:border-blue-500 
                        dark:bg-gray-700 
                        dark:border-gray-600 
                        dark:placeholder-gray-400 
                        dark:text-white 
                        dark:focus:ring-blue-500 
                        dark:focus:border-blue-500`}" 
                    placeholder="Search Foods ..." 
                    required>
                <button type="submit"
                    id="searchButtonElement"
                    class="${tw`text-[#ffffff]
                        absolute 
                        right-2.5 
                        bottom-2.5 
                        bg-green-700 
                        hover:bg-green-800 
                        focus:ring-4 focus:outline-none 
                        focus:ring-blue-300 
                        font-medium rounded-lg 
                        text-sm px-4 py-2 
                        dark:bg-green-600 
                        dark:hover:bg-green-700 
                        dark:focus:ring-green-800`}"
                >Search</button>
            </div>
        </form>
        `;

        this.shadowDOM.querySelector('#searchButtonElement')
            .addEventListener('click', this._clcikEvent);
    }

}

customElements.define('search-bar', SearchBar);