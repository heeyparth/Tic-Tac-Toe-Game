let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#newgame-btn");
let msg = document.querySelector("#msg")
let msgcontainer = document.querySelector(".msg-container")

let turnO = true;
let gamecount = 0;

let winnerspattern =[
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8],
];

const resetgame = ()=>{
    turnO = true;
    enablebox();
    gamecount = 0;
    msgcontainer.classList.add("hide");
};


boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        if(turnO){
            box.innerText = "O";
            box.style.color = "blue";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "red";
            turnO = true
        }
        box.disabled = true;
        gamecount++;
       checkwinner();
    })
})
const enablebox =()=>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText ="";
    }
}
const disablebox =()=>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const showwinner = (winner)=>{
    msg.innerText =`Congratulations, Winner is ${winner} `;
    msgcontainer.classList.remove("hide");
    disablebox();
};

const showdrow = ()=>{
    msg.innerText ="It's a Draw! No one wins";
    msgcontainer.classList.remove("hide");
    disablebox();
};
const checkwinner = ()=>{
    for (let  pattern of winnerspattern )
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "")
        {
            if (pos1val === pos2val && pos2val === pos3val)
            {
                  showwinner(pos1val);
                  return;
            }
        }

        if ( gamecount === 9){
            showdrow();
        };
    }
    
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);



