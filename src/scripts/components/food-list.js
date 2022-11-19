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
        this.shadowDOM.innerHTML = `
            <style>
                .placeholder {
                    font-weight: lighter;
                    color: rgba(0,0,0,0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>
        `;
        this.shadowDOM.innerHTML = `<h2 class="placehorlder">${message}</h2>`;
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