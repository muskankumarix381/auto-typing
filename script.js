const wordsList = ["Developer","Analyst","Coder","Learner","Student"];
const span = document.querySelector('span')

//const word = "Developer";
let wordIndex = 0;
let characterIndex = 0;
let reverseTyping = false;
let skipUpdate = 0;
setInterval(()=>{
    if(skipUpdate){
        skipUpdate--;
        return;
    }
    if(!reverseTyping){
        //skipUpdate=1
        span.innerText=span.innerText+wordsList[wordIndex][characterIndex]
        characterIndex++;
    }
    else{
        span.innerText=span.innerText.slice(0,span.innerText.length-1)
    }

    if(reverseTyping && span.innerText.length===0 ){
        reverseTyping=false;
        characterIndex = 0
    }
    if(characterIndex===wordsList[wordIndex].length){
        skipUpdate=3
        reverseTyping = true;
        wordIndex++;
    }
    if(wordIndex===wordsList.length){
        wordIndex=0;
    }
},300)