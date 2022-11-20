import '../components/food-list.js';
import '../components/search-bar.js';
import Source from '../utils/source.js';

const main = () => {
    const searchElement = document.querySelector('search-bar');
    const foodListElement = document.querySelector('food-list');
  
    const onButtonSearchClicked = async (event) => {
      event.preventDefault();
      try {
        const result2 = await Source.searchFood2(searchElement.value);
        renderResult(result2);
      } catch (message) {
        fallbackResult(message);
      }
    };
  
    const renderResult = results => {
      foodListElement.foods = results;
    };
  
    const fallbackResult = message => {
      foodListElement.renderError(message);
    };
  
    searchElement.clickEvent = onButtonSearchClicked;
  }

  export default main;