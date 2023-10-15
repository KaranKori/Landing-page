const shoes = document.querySelector(".shoes-img");
const circle = document.querySelector(".circle");
const title = document.querySelector(".title");
const buyButton = document.querySelector(".buy-btn");

const changeShoesColor = (color) => {
    shoes.src = `./img/shoes-${color}.png`;
}

const changeContentColor = (color) => {
    circle.style.backgroundColor = color;
    title.style.color = color;
    buyButton.style.backgroundColor = color;
}