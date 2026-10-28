let gameSeq=[];
let userSeq=[];
let h2 = document.querySelector("h2");

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

//1.
document.addEventListener("keypress", function(){
    if (started == false ){
        console.log("Game Started");
        started = true;
        levelUp();
    }  
});

//3.
function btnFlash(btn){
    btn.classList.add("flash");  //added flash which flashes white colour but it also has to be removed so using timeout
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

//2.
function levelUp(){
    userSeq = [];   //reset the user array
    level++;
    h2.innerText = `Level ${level}`;

    //choose random btn to flash
    let randIdx = Math.floor(Math.random() * 3); //3 is the indices of btns
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);  //selecting class of random color
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(`Game Seq : ${gameSeq}`);
    btnFlash(randbtn);

}

//3.
function btnPress(){
    let btn = this;
    btnFlash(this);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
   
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);

}
 //4.
function checkAns(idx){
    // console.log("curr level : ",level);
    // let idx = level-1; //previous level
    if(userSeq[idx] == gameSeq[idx]){   //2 cases
        if (userSeq.length == gameSeq.length){ 
             console.log(`User Seq : ${userSeq}`);   //2nd case where it matches the last colour in gameSeq to the colour in userSeq if matched level is increased and new random colour is generated
            setTimeout(levelUp , 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your Score is <b>${level}</b> <br>Press any Key to get started.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor = "white";
        } , 200);
        reset();
    }
}

//5. 
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}