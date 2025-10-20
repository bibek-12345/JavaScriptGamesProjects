let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-btn");


let turnO = true; //playerX, playerO

let count = 0; //To track Draw 

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


// for game reset
const resetGame = ()=>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.textContent= "O"
            turnO = false;
        }else{
            box.textContent = "X"
            turnO = true;
        }
        box.disabled = true; //disable the button (cannot change value if i clicked it once)
        count++;
        
        let isWinner = checkWinner();
        
        // for gametie
        if(count === 9 && !isWinner){
            gameTie();
        }
    });
});

const gameTie = ()=>{
    msg.innerText = `Game is Tie!!!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// to disable the boxes
const disableBoxes = ()=>{
    for(let box of boxes) {
        box.disabled = true;
    }
}

// to enable the boxes
const enableBoxes = ()=>{
    for(let box of boxes) {
        box.disabled = false;
        box.textContent = "";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].textContent;
        let pos2Val = boxes[pattern[1]].textContent;
        let pos3Val = boxes[pattern[2]].textContent;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);




















































