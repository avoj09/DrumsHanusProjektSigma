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
const synth1 = new Audio("sytnhfff/synth1.wav")
const synth2 = new Audio("sytnhfff/synth2.wav")
const synth3 = new Audio("sytnhfff/synth3.wav")

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
            if(predelInput[i] == "a"  || predelInput[i] == "A" || predelInput[i] == "q"  || predelInput[i] == "Q" || predelInput[i] == "z"  || predelInput[i] == "Z"){
                playNode(breakRoll)
            }
            else if(predelInput[i] == "k" || predelInput[i] == "K" || predelInput[i] == "i"  || predelInput[i] == "I"){
                playNode(zkouska)
            }
            else if(predelInput[i] == "s"  || predelInput[i] == "S" || predelInput[i] == "w"  || predelInput[i] == "W" || predelInput[i] == "x"  || predelInput[i] == "X"){
                playNode(kick)
            }
            else if(predelInput[i] == "d"  || predelInput[i] == "D" || predelInput[i] == "e"  || predelInput[i] == "E" || predelInput[i] == "c"  || predelInput[i] == "C"){
                playNode(ride1)
            }
            else if(predelInput[i] == "f"  || predelInput[i] == "F" || predelInput[i] == "r"  || predelInput[i] == "R" || predelInput[i] == "v"  || predelInput[i] == "V"){
                playNode(ride2)
            }
            else if(predelInput[i] == "g"  || predelInput[i] == "G" || predelInput[i] == "t"  || predelInput[i] == "T" || predelInput[i] == "b"  || predelInput[i] == "B"){
                playNode(snare1)
            }
            else if(predelInput[i] == "h"  || predelInput[i] == "H" || predelInput[i] == "y"  || predelInput[i] == "Y" || predelInput[i] == "n"  || predelInput[i] == "N"){
                playNode(snare2)
            }
            else if(predelInput[i] == "j"  || predelInput[i] == "J" || predelInput[i] == "u"  || predelInput[i] == "U" || predelInput[i] == "m"  || predelInput[i] == "M"){
                playNode(triplet)
            }
            else if(predelInput[i] == "o"  || predelInput[i] == "O"){
                playNode(synth1)
            }
            else if(predelInput[i] == "l"  || predelInput[i] == "L"){
                playNode(synth2)
            }
            else if(predelInput[i] == "p"  || predelInput[i] == "P"){
                playNode(synth3)
            }
            else{
                output.textContent = "wrong keys";
            }
}

function playNode(node){
    node.play()
    node.currentTime = 0;
}