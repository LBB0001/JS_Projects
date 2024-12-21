const boxes=document.querySelectorAll(".box");
const resetbutton =document.querySelector(".resetbtn");
const newbutton=document.querySelector("#new-btn");
const message=document.querySelector("#msg");
const msgcontainer = document.querySelector(".contain")

let turn0 = true; 
const winpatterns = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
let count=0;
boxes.forEach((box)=> {
    box.addEventListener('click',function(){
        
        if(turn0 == true){
            box.innerText="0";
            box.style.color="red";
            turn0=false;
        }
        else{
            box.innerText="X";
            box.style.color="green";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let win = checkresult();
        if(count == 9 && !win){
            gamedraw();
        }        
    });
});

function gamedraw(){
    message.innerText=`The match is draw`;
    message.classList.remove("hide");
    disabled();
}
function showresult(winner){
    message.innerText=`Congratulations! Winner is ${winner}`
    msgcontainer.classList.remove("hide");
    disabled();
}

function disabled(){
    for(box of boxes){
        box.disabled=true;
    }
}
function checkresult(){
    for(let pattern of winpatterns){
        pos1val=boxes[pattern[0]].innerText;
        pos2val=boxes[pattern[1]].innerText;
        pos3val=boxes[pattern[2]].innerText;
        if(pos1val !='' && pos2val !='' && pos3val !=''){
            if(pos1val== pos2val && pos2val== pos3val){
                showresult(pos1val);
            }
    }
    }
}

// reset button and new game button --->
function enabled(){
    for(box of boxes){
        box.innerText='';
        box.disabled=false;
    }
}
function reset(){
    turn0=true;
    count=0;
    enabled();
    msgcontainer.classList.add("hide");
    
}
resetbutton.addEventListener('click',reset);
newbutton.addEventListener('click',reset);