console.log('DOM');


const curr = document.querySelector('.js-curr');
//Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla wyszukanego w zmiennej curr elementu. Element ten niech zawiera napis usuń z koszyka.
if (curr) {
    const sectionElement = curr.parentElement;
    const newButton = document.createElement('button');
    newButton.innerText = 'Usuń z koszyka';
    sectionElement.appendChild(newButton);
    console.log(newButton);

    // dla wszystkich elementów, które są rodzeństwem dla elementu o klasie .js-curr dodaj klasę .siblings (wykorzystaj pętlę)

    const allElements = curr.parentElement.children;
    for (let i = 0; i < allElements.length; i++) {

        if (!(allElements[i].classList.contains('js-curr'))) {
            allElements[i].classList.add('siblings')
        }
    }

    // dla następnego elementu o klasie .article względem rodzica dla elementu o klasie .js-curr dodaj atrybut title o wartości nextElementSibling.

    const articleElement = sectionElement.nextElementSibling;
    articleElement.setAttribute('title', 'nextElementSibing');

    // do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem <button/>

    const pElement = document.createElement('p');
    pElement.innerText = 'jakiś nowy paragraf';
    const lastElement = articleElement.parentElement.lastElementChild;
    const articleButton = lastElement.querySelector('button');
    lastElement.insertBefore(pElement, articleButton);
    console.log(pElement);

    // dodaj kolejny artykuł do listy (jako pierwszy), który będzie miał tą samą strukturę co pozostałe artykuły. 

    const newArticle = sectionElement.cloneNode(true);
    sectionElement.parentElement.insertBefore(newArticle, sectionElement);
}



