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


//Selezione del bottone di Incemento;
const next = document.querySelector('.next');

//Gestire il click per cambio immagini;
next.addEventListener('click',
    function(){
        //Verifica della lista immagini
        if(itemsActive < immages.length -1) {

            // Rimozione class
            items[itemsActive].classList.remove('active');
        

            //Incremento

            //Condizione di controllo per non uscrie dall'Array;
            if(itemsActive < immages.length) {
                itemsActive++;
                console.log('Alowed');
            }

            //Associare l'immagine con la classe active
            items[itemsActive].classList.add('active'); //**
        }
    }
);




//Selezione del bottone di decremento;
const previous = document.querySelector('.previous');

// Cick per decremento;
previous.addEventListener('click',
    function(){

        // DEBUG
        console.log(itemsActive);

        // Verifica lista immagini
        // if(itemsActive < immages.length +1) {

            //DEBUG
            console.log('ok');

            // Rimozione della classe della img;
            items[itemsActive].classList.remove('active');

            if(itemsActive > 0) {
                itemsActive--;
            }

            items[itemsActive].classList.add('active');
        // }
    }
)