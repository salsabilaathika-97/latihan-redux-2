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

export default cardReducer;