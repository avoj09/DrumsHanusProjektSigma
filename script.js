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

const breakRoll = new Audio("nove drums/1.wav")
const kick = new Audio("nove drums/2.wav")
const ride1 = new Audio("nove drums/3.wav")
const ride2 = new Audio("nove drums/4.wav")
const snare1 = new Audio("nove drums/5.wav")
const snare2 = new Audio("nove drums/6.wav")
const triplet = new Audio("nove drums/7.wav")
const zkouska = new Audio("nove drums/8.wav")

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
                const aDiv =`<div class="drums" id="drums-a">a</div>`
                output.innerHTML += aDiv
                playNode(breakRoll)
            }
            else if(predelInput[i] == "z" || predelInput[i] == "Z"){
                const zDiv =`<div class="drums" id="drums-z">z</div>`
                output.innerHTML += zDiv
                playNode(zkouska)
            }
            else if(predelInput[i] == "s"  || predelInput[i] == "S"){
                const sDiv =`<div class="drums" id="drums-s">s</div>`
                output.innerHTML += sDiv
                playNode(kick)
            }
            else if(predelInput[i] == "d"  || predelInput[i] == "D"){
               const dDiv =`<div class="drums" id="drums-d">d</div>`
                output.innerHTML += dDiv
                playNode(ride1)
            }
            else if(predelInput[i] == "f"  || predelInput[i] == "F"){
                const fDiv =`<div class="drums" id="drums-f">f</div>`
                output.innerHTML += fDiv
                playNode(ride2)
            }
            else if(predelInput[i] == "g"  || predelInput[i] == "G"){
                const gDiv =`<div class="drums" id="drums-g">g</div>`
                output.innerHTML += gDiv
                playNode(snare1)
            }
            else if(predelInput[i] == "h"  || predelInput[i] == "H"){
                const hDiv =`<div class="drums" id="drums-h">h</div>`
                output.innerHTML += hDiv
                playNode(snare2)
            }
            else if(predelInput[i] == "j"  || predelInput[i] == "J"){
                const jDiv =`<div class="drums" id="drums-j">j</div>`
                output.innerHTML += jDiv
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