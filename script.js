const input = document.getElementById("input")
const intputBtn = document.getElementById("input-btn")
const output = document.getElementById("output")
const frekvence = document.getElementById("frekvence")
const clearBtn = document.getElementById("clear-btn")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")

const breakRoll = new Audio("drumbreaks/Crot_Break_roll_1.wav")
const kick = new Audio("drumbreaks/Crot kick 1.wav")
const ride1 = new Audio("drumbreaks/Crot ride 1.wav")
const ride2 = new Audio("drumbreaks/Crot ride 2.wav")
const snare1 = new Audio("drumbreaks/Crot snare 1.wav")
const snare2 = new Audio("drumbreaks/Crot snare 2.wav")
const triplet = new Audio("drumbreaks/Crot triplet 1.wav")
const zkouska = new Audio("drumbreaks/zkouska.mp3")

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

btn1.addEventListener("click",()=>{
    playNode(breakRoll)
});
btn2.addEventListener("click",()=>{
    playNode(kick)
});
btn3.addEventListener("click",()=>{
    playNode(ride1)
});
btn4.addEventListener("click",()=>{
    playNode(ride2)
});
btn5.addEventListener("click",()=>{
    playNode(snare1)
});
btn6.addEventListener("click",()=>{
    playNode(snare2)
});
btn7.addEventListener("click",()=>{
    playNode(triplet)
});

function getSound(i,predelInput){
            if(predelInput[i] == "a"  || predelInput[i] == "A"){
                output.innerHTML += `<div id="drums">a</div>`
                playNode(breakRoll)
            }
            else if(predelInput[i] == "z" || predelInput[i] == "Z"){
                output.innerHTML += `<div id="drums">zkouska</div>`
                playNode(zkouska)
            }
            else if(predelInput[i] == "s"  || predelInput[i] == "S"){
                output.innerHTML += `<div id="drums">s</div>`
                playNode(kick)
            }
            else if(predelInput[i] == "d"  || predelInput[i] == "D"){
                output.innerHTML += `<div id="drums">d</div>`
                playNode(ride1)
            }
            else if(predelInput[i] == "f"  || predelInput[i] == "F"){
                output.innerHTML += `<div id="drums">f</div>`
                playNode(ride2)
            }
            else if(predelInput[i] == "g"  || predelInput[i] == "G"){
                output.innerHTML += `<div id="drums">g</div>`
                playNode(snare1)
            }
            else if(predelInput[i] == "h"  || predelInput[i] == "H"){
                output.innerHTML += `<div id="drums">h</div>`
                playNode(snare2)
            }
            else if(predelInput[i] == "j"  || predelInput[i] == "J"){
                output.innerHTML += `<div id="drums">j</div>`
                playNode(triplet)
            }
            else{
                output.textContent = "wrong keys";
            }
}

function playNode(node){
    node.play()
    node.currentTime = 0;
}