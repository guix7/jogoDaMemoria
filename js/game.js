const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const personagens = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
]

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () =>{
    const disabledCards = document.querySelectorAll('.disabled-card');


    if(disabledCards.length === 20){
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`);
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character')
    const secondCharacter = secondCard.getAttribute('data-character')

    if (firstCharacter === secondCharacter) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();        

    } else {
        setTimeout(() => {
            firstCard.classList.remove('revelar');
            secondCard.classList.remove('revelar');

            firstCard = '';
            secondCard = '';
        }, 500);
    }
}



const revelar = ({ target }) => {
    if (target.parentNode.classList.contains('revelar')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('revelar');
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.classList.add('revelar');
        secondCard = target.parentNode;

        checkCards()
    }
}


const createCard = (personagem) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url(/images/${personagem}.png)`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revelar);
    card.setAttribute('data-character', personagem)

    return card;

}

const loadGame = () => {

    const personagensDuplicados = [...personagens, ...personagens];

    const embaralhar = personagensDuplicados.sort(() => Math.random() - 0.5);



    embaralhar.forEach((personagem) => {

        const card = createCard(personagem);
        grid.appendChild(card);
    });
}

const startTimer = () =>{

   this.loop = setInterval(() =>{
        const currentTimer = Number(timer.innerHTML);
        timer.innerHTML = currentTimer + 1;
    }, 1000);

}

window.onload = () =>{
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer()
    loadGame();
}

console.log(this);