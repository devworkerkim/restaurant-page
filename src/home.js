import restaurant_img from './restaurant-2812276_640.jpg';

const home = function () {
    const element = document.createElement('div');

    const heading = document.createElement('h1');
    heading.innerText = 'The Best-Restaurant-Ever Restaurant';

    const img = new Image();
    img.src = restaurant_img;
    
    const blurb = document.createElement('p');
    blurb.innerText = "The Best-Restaurant-Ever Restaurant is the place to enjoy all your favorite cuisines.  Our chefs have traveled around the world searching for the greatest recipies, and we take pride in the exquisite lineup of food we have to offer.  Enjoy the modern design of our dining room from the world's best artists.  Come enjoy a meal with us today!";

    element.appendChild(heading);
    element.appendChild(img);
    element.appendChild(blurb);

    return element;
}

export default home