const factsArray = ["70% of your cat's life is spent asleep.", "The cat has 500 skeletal muscles (humans have 650)."]

let url = 'https://catfact.ninja/fact/' // Visit https://catfact.ninja/ to read the documentation. 

// ITERACIÓN 1: Añade las dos curiosidades de la array para que se despliegen en la lista del HTML.

// ITERACIÓN 2: Cada vez que el usuario pulse el botón de Remove a cat fact, elimina el último elemento de la lista. 

// ITERACIÓN 3: Cada vez que el usuario pulse el botón de añadir una curiosidad, llama a la API y añade una curiosidad Random. 
// ITERACIÓN 3.BONUS: Asegurate de que nunca se despliegen curiosidades repetidas.

// ITERACIÓN 4: Añade un elemento input al HTML de tipo number. Cuando el usuario cambie el número de este input cambia el texto de los botones para que aparezca "Add / Remove x cat facts"
// ITERACIÓN 4.1: modifica las funciónes anteriores para que al hacer click en el botón se añadan o quiten este número de curiosidades. 



let ulItems = document.getElementById('cat-facts-list')
let catBtn = document.getElementById('add-button')
let delCat = document.getElementById('remove-button')
let catRandButton = document.getElementById('addrandom-button')


// Create Cat Fact
function addCatFact () {
    for (i=0; i<factsArray.length; i++) {
        let addLi = document.createElement('li')
        addLi.innerHTML = factsArray[i];
        ulItems.appendChild(addLi);       
    }
}


//Buttons
catBtn.onclick = ()=> addCatFact();
catRandButton.onclick = () => getCatFactFromApi();
delCat.onclick = () => deleteLastCat();



//Delete Last Cat Fact
function deleteLastCat () {
    ulItems.removeChild(ulItems.lastChild);
}



//Get Random Cat Fact from API & post it 
function getCatFactFromApi () {

    let addLi = document.createElement('li')

    let apiCatFact = fetch("https://catfact.ninja/fact?max_length=140")
            .then(response => response.json())
            .then(data => {
                addLi.innerHTML = data.fact;
                ulItems.appendChild(addLi);
        })
            .catch(error => console.log(error))
}



/////


const factsArray = ["70% of your cat's life is spent asleep.", "The cat has 500 skeletal muscles (humans have 650)."]

let url = 'https://catfact.ninja/fact/' // Visit https://catfact.ninja/ to read the documentation. 

// ITERACIÓN 1: Añade las dos curiosidades de la array para que se despliegen en la lista del HTML.

// ITERACIÓN 2: Cada vez que el usuario pulse el botón de Remove a cat fact, elimina el último elemento de la lista. 

// ITERACIÓN 3: Cada vez que el usuario pulse el botón de añadir una curiosidad, llama a la API y añade una curiosidad Random. 
// ITERACIÓN 3.BONUS: Asegurate de que nunca se despliegen curiosidades repetidas.

// ITERACIÓN 4: Añade un elemento input al HTML de tipo number. Cuando el usuario cambie el número de este input cambia el texto de los botones para que aparezca "Add / Remove x cat facts"
// ITERACIÓN 4.1: modifica las funciónes anteriores para que al hacer click en el botón se añadan o quiten este número de curiosidades. 



let ulItems = document.getElementById('cat-facts-list')
let catBtn = document.getElementById('add-button')
let delCat = document.getElementById('remove-button')
let catRandButton = document.getElementById('addrandom-button')


// Create Cat Fact
function addCatFact () {
    for (i=0; i<factsArray.length; i++) {
        let addLi = document.createElement('li')
        addLi.innerHTML = factsArray[i];
        ulItems.appendChild(addLi);       
    }
}


//Buttons
catBtn.onclick = ()=> addCatFact();
catRandButton.onclick = () => postCatFact();
delCat.onclick = () => deleteLastCat();



//Delete Last Cat Fact
function deleteLastCat () {
    ulItems.removeChild(ulItems.lastChild);
}

let catFactfromApi;

//Get Random Cat Fact from API & post it 
function getCatFactFromApi () {

    // let addLi = document.createElement('li')

    let apiCatFact = fetch("https://catfact.ninja/fact?max_length=140")
            .then(response => response.json())
            .then(data => {
                catFactfromApi = data.fact;
                // ulItems.appendChild(addLi);
        })
            .catch(error => console.log(error))
}

function postCatFact() {
    let addLi = document.createElement('li')

    getCatFactfromApi()
    addLi.innerHTML = catFactfromApi;
    ulItems.appendChild(addLi);
}