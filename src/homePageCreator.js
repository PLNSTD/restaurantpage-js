import './styles.css';
import restIcon from './images/restaurant_icon.png';
const contentDiv = document.querySelector('#content');


let homePageCreation = () => {
    let restaurantIcon = document.createElement('img');
    restaurantIcon.src = restIcon;
    contentDiv.appendChild(restaurantIcon);

    let headline = document.createElement('h1');
    headline.innerHTML = 'Chez P';
    contentDiv.appendChild(headline);

    let descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = 'It is so good that nobody can resist!!';
    contentDiv.appendChild(descriptionParagraph);
}

export default homePageCreation;