const menu = function () {
    const element = document.createElement('div');

    const heading = document.createElement('h1');
    heading.innerText = 'Menu';
    element.appendChild(heading);

    const appetizers = [];
    const meals = [];
    const desserts = [];

    function Food(type, name, price, description) {
        this.type = type;
        this.name = name;
        this.price = price;
        this.description = description;
        
        this.addToMenu = function() {
            if (this.type === 'appetizer') appetizers.push({name: this.name, price: this.price, description: this.description});
            if (this.type === 'meal') meals.push({name: this.name, price: this.price, description: this.description});
            if (this.type === 'dessert') desserts.push({name: this.name, price: this.price, description: this.description});
        }
    }

    const bread = new Food('appetizer', 'Bread', 5, 'Take a loaf off with some fresh baked bread straight from our oven.');
    bread.addToMenu();
    const chips = new Food('appetizer', 'Tortilla Chips', 4, 'Grab a basket of our tortilla chips for everyone.');
    chips.addToMenu();
    const spaghetti = new Food('meal', 'Spaghetti & Meatballs', 8, 'From the far reaches of Italy, our spaghetti & meatballs is our family recipe from our distant cousins.');
    spaghetti.addToMenu();
    const bakedChicken = new Food('meal', 'Baked Chicken', 10, 'Fresh chicken baked in our stone oven for hours to bring out the savory flavors');
    bakedChicken.addToMenu();
    const iceCream = new Food('dessert', 'Ice Cream Sundae', 5, "Made from our our grass-fed cows' milk, a generous serving of our cool ice cream.")
    iceCream.addToMenu();
    const chocolateCake = new Food('dessert', 'Chocolate Cake', 8, "The world's most exotic cacao made into a delicous cake.")
    chocolateCake.addToMenu();

    const appetizerElement = document.createElement('div');
    const appetizerHeading = document.createElement('h2');
    appetizerHeading.innerText = 'Appetizers';
    appetizerElement.appendChild(appetizerHeading);
    appetizers.forEach((appetizer) => {
        const heading = document.createElement('h3');
        heading.innerText = appetizer.name;
        const price = document.createElement('h4');
        price.innerText = `$${appetizer.price}`;
        const description = document.createElement('p');
        description.innerText = appetizer.description;
        appetizerElement.appendChild(heading);
        appetizerElement.appendChild(price);
        appetizerElement.appendChild(description);
    });
    const mealElement = document.createElement('div');
    const mealHeading = document.createElement('h2');
    mealHeading.innerText = 'Meals';
    mealElement.appendChild(mealHeading);
    meals.forEach((meal) => {
        const heading = document.createElement('h3');
        heading.innerText = meal.name;
        const price = document.createElement('h4');
        price.innerText = `$${meal.price}`;
        const description = document.createElement('p');
        description.innerText = meal.description;
        mealElement.appendChild(heading);
        mealElement.appendChild(price);
        mealElement.appendChild(description);
    });
    const dessertElement = document.createElement('div');
    const dessertHeading = document.createElement('h2');
    dessertHeading.innerText = 'Desserts';
    dessertElement.appendChild(dessertHeading);
    desserts.forEach((dessert) => {
        const heading = document.createElement('h3');
        heading.innerText = dessert.name;
        const price = document.createElement('h4');
        price.innerText = `$${dessert.price}`;
        const description = document.createElement('p');
        description.innerText = dessert.description;
        dessertElement.appendChild(heading);
        dessertElement.appendChild(price);
        dessertElement.appendChild(description);
    });

    element.appendChild(appetizerElement);
    element.appendChild(mealElement);
    element.appendChild(dessertElement);

    return element;
}

export default menu;