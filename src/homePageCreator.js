import './styles.css';

let homePageCreation = () => {
    const pageContainer = document.querySelector('#page-container');
    pageContainer.innerHTML = '';
    let homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    
    let titleContent = document.createElement('div');
    titleContent.classList.add('home-title-container');
    let subTitle = document.createElement('h2');
    subTitle.classList.add('home-title');
    subTitle.innerHTML = 'Welcome to "El Fogon de Filomena" - A Taste of Italy!';
    let iconTitle = document.createElement('span');
    iconTitle.classList.add('italy-icon');

    let descriptionParagraph = document.createElement('p');
    descriptionParagraph.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quae soluta facilis magnam libero autem, laboriosam est esse quisquam illo vitae quaerat voluptas modi eveniet officiis ipsam consectetur tempora. Eius quasi earum accusamus itaque, pariatur sint nesciunt at, ratione libero, natus esse magnam vitae eaque dolor! Impedit ullam ipsa voluptas. <hr>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio harum error nihil corporis voluptatem perferendis iste, ipsa blanditiis officiis illum excepturi quas fugit, impedit, dolorem facere rerum maiores unde illo nemo? Numquam placeat tempora sint provident, magni inventore minus voluptatibus cumque ab labore, itaque consequuntur atque vero adipisci est quae cum aperiam non assumenda qui quidem suscipit quam? Nihil magni tempore a similique cumque consequuntur facere, possimus recusandae ea aperiam praesentium tempora fuga quidem vitae doloribus obcaecati, et labore molestias repudiandae maxime molestiae esse. Laboriosam fugiat, nihil assumenda molestiae quae facere, id, consectetur debitis quo illo molestias hic quia."

    titleContent.appendChild(subTitle);
    titleContent.appendChild(iconTitle);
    homeContent.appendChild(titleContent);
    homeContent.appendChild(descriptionParagraph);
    pageContainer.appendChild(homeContent);
}

export default homePageCreation;