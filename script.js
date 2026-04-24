const input = document.getElementById("input")
const intputBtn = document.getElementById("input-btn")
const output = document.getElementById("output")

const breakRoll = new Audio("drumbreaks/Crot Break roll 1.wav")
const kick = new Audio("drumbreaks/Crot kick 1.wav")
const ride1 = new Audio("drumbreaks/Crot ride 1.wav")
const ride2 = new Audio("drumbreaks/Crot ride 2.wav")
const snare1 = new Audio("drumbreaks/Crot snare 1.wav")
const snare2 = new Audio("drumbreaks/Crot snare 2.wav")
const triplet = new Audio("drumbreaks/Crot triplet 1.wav")

intputBtn.addEventListener("click",() => {

    if(input.value == ""){
        alet("Zadejte něco")
    }
    else{
        const myInput = input.value;
        const predelInput = [...myInput];
        for(let i = 0; i < predelInput.lengt; i++){
            if(predelInput[i] == "a"  || predelInput[i] == "A"){
                output.innerHTML += `<div ="drums">a</div>`
                breakRoll.play();
            }
            else if(predelInput[i] == "s"  || predelInput[i] == "S"){
                output.innerHTML += `<div ="drums">a</div>`
                kick.play();
            }
            else if(predelInput[i] == "d"  || predelInput[i] == "D"){
                output.innerHTML += `<div ="drums">a</div>`
                ride1.play();
            }
            else if(predelInput[i] == "f"  || predelInput[i] == "F"){
                output.innerHTML += `<div ="drums">a</div>`
                ride2.play();
            }
            else if(predelInput[i] == "g"  || predelInput[i] == "G"){
                output.innerHTML += `<div ="drums">a</div>`
                snare1.play();
            }
            else if(predelInput[i] == "h"  || predelInput[i] == "H"){
                output.innerHTML += `<div ="drums">a</div>`
                snare2.play();
            }
            else if(predelInput[i] == "j"  || predelInput[i] == "J"){
                output.innerHTML += `<div ="drums">a</div>`
                triplet.play();
            }
            else{
                output.textContent = "wrong keys";
            }
        }
    }
    
});