//Creare un array contentente le immagini;
let immages =[
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
]

// Individuare e selezionare elemento contenitore
const contenitoreImg = document.querySelector('immage');

//Prendo gli elementi presenti nell'Array;
for(let i = 0; i < immages.length; i++) {

    //Mettere nell HTML l'immagine

    document.querySelector('.box').innerHTML += `<img class="item" src="${immages[i]}" alt="">`;
    // 
}


//Selezionare gli elementi in pagina
const items = document.getElementsByClassName('item');
let itemsActive = 0;

// Aggiunta della classe (Active) alle immagini; **
items[itemsActive].classList.add('active');


//Selezione del bottone
const next = document.querySelector('.next');

//Gestire il click per cambio immagini;
next.addEventListener('click',
    function(){
        //Incremento
        itemsActive++;
        console.log(itemsActive);

        //Associare l'immagine con la classe active
        items[itemsActive].classList.add('active'); //**
    }
);
