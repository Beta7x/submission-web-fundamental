import { create, cssomSheet } from 'twind';

const sheet = cssomSheet({ target: new CSSStyleSheet() });
const { tw } = create({ sheet });

class FoodItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set food(food) {
        this._food = food;
        this.render();
    }

    render() {
        this.shadowDOM.adoptedStyleSheets = [sheet.target];
        this.shadowDOM.innerHTML =  `
            <div class="${tw`m-2 max-w-sm 
                    bg-white border 
                    border-gray-200 
                    rounded-lg 
                    shadow-md 
                    dark:bg-gray-800 
                    dark:border-gray-700`}">
                <a href="#">
                    <img class="${tw`rounded-t-lg`}" src="${this._food.strMealThumb}" alt="" />
                </a>
                <div class="${tw`p-5`}">
                    <a href="#">
                        <h5 class="${tw`mb-2 text-2xl
                            font-bold 
                            tracking-tight 
                            text-gray-900 
                            dark:text-white`}"
                        >${this._food.strMeal}</h5>
                    </a>
                    <button type="button" class="${tw`
                        text-white 
                        bg-red-700 
                        hover:bg-red-800 
                        focus:outline-none 
                        focus:ring-4 
                        focus:ring-red-300 
                        font-medium 
                        rounded-full 
                        text-sm 
                        px-5 
                        py-2.5 
                        text-center 
                        mr-2 my-2 
                        dark:bg-red-600 
                        dark:hover:bg-red-700 
                        dark:focus:ring-red-900`}"
                    >
                        <a href="${this._food.strYoutube}" target="_blank">YouTube</a>
                    </button>
                    <p class="${tw`mb-3 font-normal text-gray-700 dark:text-gray-400 text-ellipsis h-96 overflow-auto`}">${this._food.strInstructions}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('food-item', FoodItem);