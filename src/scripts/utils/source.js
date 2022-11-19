import axios from "axios";

class Source {
    // static searchFood(keyword) {
    //     return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    //         .then(response => {
    //           return response.json();
    //         })
    //         .then(responseJson => {
    //           if (responseJson.meals) {
    //             return Promise.resolve(responseJson.meals);
    //           } else {
    //             return Promise.reject(`${keyword} is not found`);
    //           }
    //         });
    //   }

      static searchFood2(keyword) {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(res => {
                return res.data;
            }).then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                  } else {
                    return Promise.reject(`${keyword} is not found`);
                  } 
            });
      }
}

export default Source;