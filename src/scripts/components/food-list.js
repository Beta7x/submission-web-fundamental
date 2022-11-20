import './food-item.js';
import { create, cssomSheet } from 'twind';

const sheet = cssomSheet({ target: new CSSStyleSheet() });
const { tw } = create({ sheet });

class FoodList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set foods(foods) {
        this._foods = foods;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.adoptedStyleSheets = [sheet.target];
        this.shadowDOM.innerHTML = `
        <main class="${tw`h-screen w-full flex flex-col justify-center items-center bg-[#1A2332]`}">
            <h1 class="${tw`text-9xl font-extrabold text-white tracking-widest`}">404</h1>
            <div class="${tw`bg-[#9FEF00] px-2 text-sm rounded rotate-12 absolute`}">
                ${message}
            </div>
        </main>
        `;
    }

    render() {
        this.shadowDOM.adoptedStyleSheets = [sheet.target];
        this.shadowDOM.innerHTML = `
            <section id="foodContainer" class="${tw`container mx-auto flex flex-wrap items-start my-5 px-10 pb-10`}">
            </section>
        `;
        this._foods.forEach(food => {
            const foodItemElement = document.createElement('food-item');
            foodItemElement.food = food;

            this.shadowDOM.getElementById('foodContainer').appendChild(foodItemElement);
        });
    }
}

customElements.define('food-list', FoodList);