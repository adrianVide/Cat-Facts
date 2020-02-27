const factsArray = ["70% of your cat's life is spent asleep.", "The cat has 500 skeletal muscles (humans have 650)."]

let url = 'https://catfact.ninja/fact/' // Visit https://catfact.ninja/ to read the documentation. 

// ITERACIÓN 1: Añade las dos curiosidades de la array para que se despliegen en la lista del HTML.

// ITERACIÓN 2: Cada vez que el usuario polse el botón de Remove a cat fact, elimina el último elemento de la lista. 

// ITERACIÓN 3: Cada vez que el usuario polse el botón de añadir una curiosidad, llama a la API y añade una curiosidad Random. 
// ITERACIÓN 3.BONUS: Asegurate de que nunca se despliegen curiosidades repetidas.

// ITERACIÓN 4: Añade un elemento input al HTML de tipo number. Cuando el usuario cambie el número de este input cambia el texto de los botones para que aparezca "Add / Remove x cat facts"
// ITERACIÓN 4.1: modifica las funciónes anteriores para que al hacer click en el botón se añadan o quiten este número de curiosidades. 



let olItems = document.getElementById('cat-facts-list')
let catBtn = document.getElementById('add-button')
let delCat = document.getElementById('remove-button')
let catRandButton = document.getElementById('addrandom-button')
let inputNumber = document.getElementById('number-input')
let inputNumberToGrab = 1;


// Create Cat Fact
function addCatFact () {
    for (i=0; i<factsArray.length; i++) {
        let addLi = document.createElement('li')
        addLi.innerHTML = factsArray[i];
        olItems.appendChild(addLi);       
    }
}


//Buttons
catBtn.onclick = () => addCatFact();
catRandButton.onclick = () => xTimesAdd();
delCat.onclick = () => xTimesDel();



//Delete Last Cat Fact
function deleteLastCat () {
    olItems.removeChild(olItems.lastChild);
}



//Get Random Cat Fact from API & post it 
function getCatFactFromApi () {

    let addLi = document.createElement('li')

    let apiCatFact = fetch("https://catfact.ninja/fact?max_length=140")
            .then(response => response.json())
            .then(data => {
                addLi.innerHTML = data.fact;
                olItems.appendChild(addLi);
        })
            .catch(error => console.log(error))
}


inputNumber.addEventListener("change", changeValue)

function changeValue() { 

    let value = inputNumber.value;

    document.getElementById('addrandom-button').innerHTML = `Add ${value} cat facts.`
    document.getElementById('remove-button').innerHTML = `Remove ${value} cat facts.`
   
    inputNumberToGrab = value;
}

function xTimesAdd() {
    for (i=0; i<inputNumberToGrab; i++) {
        getCatFactFromApi()
    }
}

function xTimesDel() {
    for (i=0; i<inputNumberToGrab; i++) {
        deleteLastCat()
    }
}



//

// //ITERACIÓN 4: Añade un elemento input al HTML de tipo number. Cuando el usuario cambie el número de este input cambia el texto de los botones para que aparezca “Add / Remove x cat facts”
// function funcioncambiarnombre(){
//     removeButton.innerHTML=`Remove ${document.getElementById(“number-input”).value} cat facts`
//     addButton.innerHTML=`Add ${document.getElementById(“number-input”).value} cat facts`
// }
// // ITERACIÓN 4.1: modifica las funciónes anteriores para que al hacer click en el botón se añadan o quiten este número de curiosidades.
// //function batch(function,number)
// window.onload = añadirAlHtml(factsArray)
// removeButton.onclick = removeElementFunction
// addButton.onclick = addElementToArray
// numberInput.addEventListener(“change”,funcioncambiarnombre)