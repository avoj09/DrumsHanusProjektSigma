const input = document.getElementById("input")
const intputBtn = document.getElementById("input-btn")
const output = document.getElementById("output")
const frekvence = document.getElementById("frekvence")
const clearBtn = document.getElementById("clear-btn")

const breakRoll = new Audio("drumbreaks/Crot_Break_roll_1.wav")
const kick = new Audio("drumbreaks/Crot kick 1.wav")
const ride1 = new Audio("drumbreaks/Crot ride 1.wav")
const ride2 = new Audio("drumbreaks/Crot ride 2.wav")
const snare1 = new Audio("drumbreaks/Crot snare 1.wav")
const snare2 = new Audio("drumbreaks/Crot snare 2.wav")
const triplet = new Audio("drumbreaks/Crot triplet 1.wav")

clearBtn.addEventListener("click",() =>{
    output.innerHTML = "";
    input.value = "";
    frekvence.value = "";
})

intputBtn.addEventListener("click",() => {
    output.innerHTML = "";
    output.textContent = "";
    let regex = /[0-9]/g;
    if(input.value == "" || frekvence.value == "" || !frekvence.value.match(regex)){
        alert("Zadejte něco nebo je něco špatně zadáno")
    }
    else{
        const frekvenceSet = Number(frekvence.value)
        const myInput = input.value;
        const predelInput = [...myInput];
        for(let i = 0; i < predelInput.length; i++){ 
            setTimeout( () => {getSound(i,predelInput)}, frekvenceSet * i);
        }    
    }       
    
});

function getSound(i,predelInput){
             if(predelInput[i] == "a"  || predelInput[i] == "A"){
                output.innerHTML += `<div ="drums">a</div>`
                breakRoll.play();
            }
            else if(predelInput[i] == "s"  || predelInput[i] == "S"){
                output.innerHTML += `<div ="drums">s</div>`
                kick.play();
            }
            else if(predelInput[i] == "d"  || predelInput[i] == "D"){
                output.innerHTML += `<div ="drums">d</div>`
                ride1.play();
            }
            else if(predelInput[i] == "f"  || predelInput[i] == "F"){
                output.innerHTML += `<div ="drums">f</div>`
                ride2.play();
            }
            else if(predelInput[i] == "g"  || predelInput[i] == "G"){
                output.innerHTML += `<div ="drums">g</div>`
                snare1.play();
            }
            else if(predelInput[i] == "h"  || predelInput[i] == "H"){
                output.innerHTML += `<div ="drums">h</div>`
                snare2.play();
            }
            else if(predelInput[i] == "j"  || predelInput[i] == "J"){
                output.innerHTML += `<div ="drums">j</div>`
                triplet.play();
            }
            else{
                output.textContent = "wrong keys";
                // break;
            }
}