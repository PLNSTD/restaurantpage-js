import restIcon from './images/restaurant_icon.png';
import homePageCreator from "./homePageCreator";
import menuPageCreation from './menuPageCreator';

const pageContainer = document.createElement('div');
const mainContainer = document.querySelector('#content');
//Setup MainDiv 
//mainContainer.appendChild(pageContainer);
pageContainer.setAttribute('id', 'page-container');

let navBarCreation = () => {
    let navDiv = document.createElement('div');
    navDiv.classList.add('topnav');

    let tabDiv = document.createElement('div');
    tabDiv.classList.add('tab-links');

    //Tabs
    let homeTab = document.createElement('a');
    homeTab.classList.add('page-tab');
    homeTab.innerHTML = 'Home';

    homeTab.addEventListener('click', function(e) {
        if (currentTab == homeTab) return;
        currentTab.classList.remove('selected');
        currentTab = homeTab;
        homeTab.classList.add('selected');
        homePageCreator();
    })
    let menuTab = document.createElement('a');
    menuTab.classList.add('page-tab');
    menuTab.innerHTML = 'Menu';

    menuTab.addEventListener('click', function(e) {
        if (currentTab == menuTab) return;
        currentTab.classList.remove('selected');
        currentTab = menuTab;
        menuTab.classList.add('selected');
        menuPageCreation();
    })

    let contactsTab = document.createElement('a');
    contactsTab.classList.add('page-tab');
    contactsTab.innerHTML = 'Contacts';

    contactsTab.addEventListener('click', function(e) {
        if (currentTab == contactsTab) return;
        currentTab.classList.remove('selected');
        currentTab = contactsTab;
        contactsTab.classList.add('selected');
        homePageCreator();
    })

    let currentTab = homeTab;
    currentTab.classList.add('selected');
    tabDiv.appendChild(homeTab);
    tabDiv.appendChild(menuTab);
    tabDiv.appendChild(contactsTab);

    //Img
    let iconDiv = document.createElement('div');
    iconDiv.classList.add('icon-container');
    let restaurantIcon = document.createElement('img');
    restaurantIcon.src = restIcon;
    restaurantIcon.classList.add('mini-icon');
    iconDiv.appendChild(restaurantIcon);

    //Restaurant name
    let headline = document.createElement('h1');
    headline.innerHTML = 'El Fogon de Filomena';
    iconDiv.appendChild(headline);

    navDiv.appendChild(iconDiv);
    navDiv.appendChild(tabDiv);
    mainContainer.appendChild(navDiv);
    mainContainer.appendChild(pageContainer);
}

navBarCreation();
homePageCreator();