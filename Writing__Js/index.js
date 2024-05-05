// const span6 =document.getElementById('id6');
// const span7 =document.getElementById('id7');
// const span8 =document.getElementById('id8');
// const span9 =document.getElementById('id9');
// const span10 =document.getElementById('id10');
// const span11 =document.getElementById('id11');

// const tranInG = [1,2,3,4,5,6,7,8,9,10];
// tranInG.forEach((el)=>{
    //     if(el%2===0){
        //         var number = {type1:'odd',type2:'even',el};
        //         let arreven =[];
        //         arreven.push(el)
        
        //         return (console.log(arreven));
        //     }
        // })
        
const imoje =document.querySelector('.imoje');
const imoje1=document.createElement('span');
const imoje2=document.createElement('span');
imoje1.setAttribute('id','imoje1');
imoje1.innerHTML=`😪`;
imoje2.setAttribute('id','imoje2');
imoje2.innerHTML=`😀`;
imoje.appendChild(imoje1);
imoje.appendChild(imoje2);
console.log(document.getElementById(`imoje${1}`));
const span =document.querySelectorAll('.span span');
const Span =document.querySelector('.span');
const hintTextB= document.querySelector('.hint-text b');
const keyboardDiv = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".word-display");
const guesseText =document.querySelector('.guesses-text b')
const traning = document.querySelector('.traning');
const maxGussescount = 6 ;
const gameModel =document.querySelector('.game-model') ;
const spaN=document.querySelector('.container');
let curretWord,wrongGuessescount=0,correctLetters=[] ;
let idID ;
let Play_Again=document.querySelector('.play-again');
let Reload=()=>{
    window.location.reload();
}
const getRandomword = () =>{
    const {word,hint}=wordlist[Math.floor(Math.random()*wordlist.length)];
    curretWord=word;
    
    hintTextB.innerHTML=hint;
    wordDisplay.innerHTML=word.split("").map(()=>`<li class="letter"></li>`).join("");
    console.log(curretWord)
    
}

const gameOver =(isVictory)=>{
setTimeout(() => {
    //  To Use in ID for all span 
    const modelText =isVictory?`You found the word : ` : ` The Correct word was : `;
    gameModel.querySelector('p').innerHTML=`${modelText}<b>${curretWord}</b>`;
    gameModel.querySelector('h4').innerText=`${isVictory?'Congrats':'Game Over!!'}`;
    gameModel.querySelector('#imoje1').innerHTML=`${isVictory?`${imoje2}`:`${imoje1}` }`;
    document.getElementById(`imoje${2}`);
    if(isVictory===true){
         
    }
    //   gameModel.querySelector('span').id=`span${x}`
    document.querySelector('.imoje').classList.remove("congrats");
    gameModel.classList.add("show");
        
        
    },300);
    
}
const intiGame = (button,clickedletter)=>{
    if(curretWord.includes(clickedletter)){
        [...curretWord].forEach((letter,index)=>{
            // console.log(index)
        if(letter===clickedletter){
            correctLetters.push(letter)
        wordDisplay.querySelectorAll('li')[index].innerText=letter ;
        wordDisplay.querySelectorAll('li')[index].classList.add('guesses') ;

            }
        })
    }
    else{
        ++wrongGuessescount;
        idID=document.getElementById(`id${wrongGuessescount+5}`);
        let element =document.createElement('span') ;
        element.setAttribute('id',`id${wrongGuessescount+5}`)
        element.style.display='block'
        Span.append(element);
        console.log(Span);

   ///     let arr =[];
        // for(let q =6 ;q<12;q++){
            //     const id=document.getElementById('id'+`${q}`);
            //     arr[q]=id
            //     // if(wrongGuessescount){
                //         //     arr[q].map((el)=>{
                    //             //         ++el
                    //         //     })
                    //     }
                    
                    
     }
     button.disabled=true ; 
    guesseText.innerText=`${wrongGuessescount} / ${maxGussescount} `
    if(wrongGuessescount===maxGussescount)return(gameOver(false)) ;
    if(correctLetters.length===curretWord.length)return(gameOver(true)) ;
    }

    // Creating Keybord by js 
    for(let i=97;i<=122;i++){
        let buttonID =document.getElementById('ww')
        const button = document.createElement("button") ;
        // button.setAttribute('id','ww');
        button.innerHTML = String.fromCharCode(i) ;
        keyboardDiv.appendChild(button);
        button.addEventListener('click',e=>intiGame(e.target,String.fromCharCode(i)))
    }
    
    getRandomword();
