

window.onload = function StartUp (){

// Oppgave 1

// Lag lytteren og funksjonen som gjør at du kan fjerne et element med id #remove.
// Bruk knappen med id #remove-btn 
    const removeText = document.getElementById('remove');
    const removeTextButton = document.getElementById ('remove-btn');

    removeTextButton.addEventListener ('click', () => {
        removeText.innerHTML = ' ';
        console.log (removeText.innerHTML);
    })


// Oppgave 2

    const changeText = document.getElementById('change');
    const changeTextButton = document.getElementById ('change-btn');

    changeTextButton.addEventListener ('click', () => {
        changeText.innerHTML = `Neimen, har du sett! Teksten ble endret gitt`;
        console.log (changeText.innerHTML);
    })

// Oppgave 3

        const inputField = document.getElementById (`input`);
        const textPrint = document.getElementById (`input-text`);

        inputField.addEventListener (`input`, () => {
            let inputValue = inputField.value;
            textPrint.textContent = inputValue;

            
        }) 

// Oppgave 4


const myList = ['item one', 'item two', 'item three'];
// Oppgave 5
// Oppgave 6
// Oppgave 7
// Oppgave 8
}