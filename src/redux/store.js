import {createStore, combineReducers} from "redux";

const navbarState = {
    data: {
        company_name: "Reqresverse",
        logo: "https://reqres.in/img/faces/6-image.jpg",
    },
};

const navbarReducer = (state = navbarState) => {
    return state;
};

const cardState = {
    data: {
        name: "Salsa",
        avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
};


// berfungsi untuk memasukkan state ke dalam store
const cardReducer = (state = cardState) => {
    return state;
};

export const store = createStore(combineReducers({navbarReducer, cardReducer}));
