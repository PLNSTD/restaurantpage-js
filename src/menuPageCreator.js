import './menuStyle.css'

let menuPageCreation = () => {
    const pageContainer = document.querySelector('#page-container');
    pageContainer.innerHTML = '';

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');

    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('menu-title');
    menuTitle.innerHTML = "MENU";

    const menuIcon = document.createElement('span');
    menuIcon.classList.add('menu-icon');

    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.classList.add('menu-items-container');

    const menuStartersContainer = document.createElement('div');
    menuStartersContainer.classList.add('flex-childs');
    const menuMainDishesContainer = document.createElement('div');
    menuMainDishesContainer.classList.add('flex-childs');
    const menuSaladsContainer = document.createElement('div');
    menuSaladsContainer.classList.add('flex-childs');
    const menuSpecialContainer = document.createElement('div');
    menuSpecialContainer.classList.add('flex-childs');
    const menuDrinksContainer = document.createElement('div');
    menuDrinksContainer.classList.add('flex-childs');
    const menuDessertsContainer = document.createElement('div');
    menuDessertsContainer.classList.add('flex-childs');

    const menuStartersH = document.createElement('h4');
    const menuMainDishesH = document.createElement('h4');
    const menuSaladsH = document.createElement('h4');
    const menuSpecialH = document.createElement('h4');
    const menuDrinksH = document.createElement('h4');
    const menuDessertsH = document.createElement('h4');

    menuStartersH.innerHTML = 'STARTERS<hr>';
    menuMainDishesH.innerHTML = 'MAIN DISHES<hr>';
    menuSaladsH.innerHTML = 'SALADS<hr>';
    menuSpecialH.innerHTML = 'HOUSE SPECIALS<hr>';
    menuDrinksH.innerHTML = 'DRINKS<hr>';
    menuDessertsH.innerHTML = 'DESSERTS<hr>';

    //Adding headers to each item section
    menuStartersContainer.appendChild(menuStartersH);
    menuMainDishesContainer.appendChild(menuMainDishesH);
    menuSaladsContainer.appendChild(menuSaladsH);
    menuSpecialContainer.appendChild(menuSpecialH);
    menuDrinksContainer.appendChild(menuDrinksH);
    menuDessertsContainer.appendChild(menuDessertsH);

    //Adding menu SECTIONS to the item container
    menuItemsContainer.appendChild(menuStartersContainer);
    menuItemsContainer.appendChild(menuMainDishesContainer);
    menuItemsContainer.appendChild(menuSaladsContainer);
    menuItemsContainer.appendChild(menuSpecialContainer);
    menuItemsContainer.appendChild(menuDrinksContainer);
    menuItemsContainer.appendChild(menuDessertsContainer);

    const startersList = document.createElement('ol');
    menuStartersContainer.classList.add('starters-container');
    menuStartersContainer.classList.add('items-containers');
    menuStartersContainer.appendChild(startersList);
    const startersBackgroundImg = document.createElement('div');
    startersBackgroundImg.classList.add('starters-img');
    menuStartersContainer.append(startersBackgroundImg);

    const mainDishesList = document.createElement('ol');
    menuMainDishesContainer.classList.add('main-dishes-container');
    menuMainDishesContainer.classList.add('items-containers');
    menuMainDishesContainer.appendChild(mainDishesList);
    const mainDishesBackgroundImg = document.createElement('div');
    mainDishesBackgroundImg.classList.add('main-dish-img');
    menuMainDishesContainer.appendChild(mainDishesBackgroundImg);

    const saladsList = document.createElement('ol');
    menuSaladsContainer.classList.add('salads-container');
    menuSaladsContainer.classList.add('items-containers');
    menuSaladsContainer.appendChild(saladsList);
    const saladsBackgroundImg = document.createElement('div');
    saladsBackgroundImg.classList.add('salads-img');
    menuSaladsContainer.appendChild(saladsBackgroundImg);

    const specialsList = document.createElement('ol');
    menuSpecialContainer.classList.add('specials-container');
    menuSpecialContainer.classList.add('items-containers');
    menuSpecialContainer.appendChild(specialsList);
    const specialsBackgroundImg = document.createElement('div');
    specialsBackgroundImg.classList.add('specials-img');
    menuSpecialContainer.appendChild(specialsBackgroundImg);

    const drinksList = document.createElement('ol');
    menuDrinksContainer.classList.add('drinks-container');
    menuDrinksContainer.classList.add('items-containers');
    menuDrinksContainer.appendChild(drinksList);
    const drinksBackgroundImg = document.createElement('div');
    drinksBackgroundImg.classList.add('drinks-img');
    menuDrinksContainer.appendChild(drinksBackgroundImg);

    const dessertsList = document.createElement('ol');
    menuDessertsContainer.classList.add('desserts-container');
    menuDessertsContainer.classList.add('items-containers');
    menuDessertsContainer.appendChild(dessertsList);
    const dessertsBackgroundImg = document.createElement('div');
    dessertsBackgroundImg.classList.add('desserts-img');
    menuDessertsContainer.appendChild(dessertsBackgroundImg);

    starterListCreation(startersList);
    mainDishesListCreation(mainDishesList);
    saladsListCreation(saladsList);
    specialsListCreation(specialsList);
    drinksListCreation(drinksList);
    dessertsListCreation(dessertsList);

    titleContainer.appendChild(menuTitle);
    titleContainer.appendChild(menuIcon);
    menuContainer.appendChild(titleContainer);
    menuContainer.appendChild(menuItemsContainer);
    pageContainer.appendChild(menuContainer);
}

let starterListCreation = (starterList) => {
    //Adding items to Starters
    for(let i = 0; i < 5; i++) {
        let starterItem = document.createElement('li');
        let starterContainer = document.createElement('div');
        let starterName = document.createElement('h3');
        

        starterName.classList.add('starter-item');
        starterName.innerHTML = 'Starter';
        //Add starter price with description as "pedice del nome";
        let itemPrice = document.createElement('p');
        itemPrice.innerHTML = '5$';
        starterContainer.classList.add('item-container');

        starterContainer.appendChild(starterName);
        starterContainer.appendChild(itemPrice);
        starterItem.appendChild(starterContainer)
        starterList.appendChild(starterItem);
    }
}

let mainDishesListCreation = (dishesList) => {
    //Adding items to mainDishes
    for(let i = 0; i < 5; i++) {
        let item = document.createElement('li');
        let itemContainer = document.createElement('div');
        let subItemName = document.createElement('h3');

        subItemName.classList.add('main-dish-item');
        subItemName.innerHTML = 'Main Dish';

        //Add starter price with description as "pedice del nome";
        let itemPrice = document.createElement('p');
        itemPrice.innerHTML = '5$';
        itemContainer.classList.add('item-container');

        itemContainer.appendChild(subItemName);
        itemContainer.appendChild(itemPrice);
        item.appendChild(itemContainer)
        dishesList.appendChild(item);
    }
}

let saladsListCreation = (dishesList) => {
    //Adding items to mainDishes
    for(let i = 0; i < 5; i++) {
        let item = document.createElement('li');
        let itemContainer = document.createElement('div');
        let subItemName = document.createElement('h3');

        subItemName.classList.add('salad-item');
        subItemName.innerHTML = 'Salad';
        //Add starter price with description as "pedice del nome";
        let itemPrice = document.createElement('p');
        itemPrice.innerHTML = '5$';
        itemContainer.classList.add('item-container');

        itemContainer.appendChild(subItemName);
        itemContainer.appendChild(itemPrice);
        item.appendChild(itemContainer)
        dishesList.appendChild(item);
    }
}

let specialsListCreation = (dishesList) => {
    //Adding items to mainDishes
    for(let i = 0; i < 5; i++) {
        let item = document.createElement('li');
        let itemContainer = document.createElement('div');
        let subItemName = document.createElement('h3');

        subItemName.classList.add('special-item');
        subItemName.innerHTML = 'Special';
        //Add starter price with description as "pedice del nome";
        let itemPrice = document.createElement('p');
        itemPrice.innerHTML = '5$';
        itemContainer.classList.add('item-container');

        itemContainer.appendChild(subItemName);
        itemContainer.appendChild(itemPrice);
        item.appendChild(itemContainer)
        dishesList.appendChild(item);
    }
}

let drinksListCreation = (dishesList) => {
    //Adding items to mainDishes
    for(let i = 0; i < 5; i++) {
        let item = document.createElement('li');
        let itemContainer = document.createElement('div');
        let subItemName = document.createElement('h3');

        subItemName.classList.add('drink-item');
        subItemName.innerHTML = 'Drink';
        //Add starter price with description as "pedice del nome";
        let itemPrice = document.createElement('p');
        itemPrice.innerHTML = '5$';
        itemContainer.classList.add('item-container');

        itemContainer.appendChild(subItemName);
        itemContainer.appendChild(itemPrice);
        item.appendChild(itemContainer)
        dishesList.appendChild(item);
    }
}

let dessertsListCreation = (dishesList) => {
    //Adding items to mainDishes
    for(let i = 0; i < 5; i++) {
        let item = document.createElement('li');
        let itemContainer = document.createElement('div');
        let subItemName = document.createElement('h3');

        subItemName.classList.add('dessert-item');
        subItemName.innerHTML = 'Dessert';
        let itemPrice = document.createElement('p');
        itemPrice.innerHTML = '5$';
        itemContainer.classList.add('item-container');

        itemContainer.appendChild(subItemName);
        itemContainer.appendChild(itemPrice);
        item.appendChild(itemContainer)
        dishesList.appendChild(item);
    }
}

export default menuPageCreation;