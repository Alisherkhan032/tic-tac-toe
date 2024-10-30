let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset-btn');
let output = document.querySelector('.outputFeild');
console.log(output)

let flag_X = true;
let totalMovesPlayed = 0;

let winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]

resetBtn.addEventListener('click',()=>{
    enableButtonsAndResetState();
    flag_X = true;
    totalMovesPlayed = 0;
    output.innerHTML = ''
})

boxes.forEach(box => {
    box.addEventListener('click', ()=>{
        if(flag_X){
            box.innerHTML = 'X'
            flag_X = false;
        }else{
            box.innerHTML = 'O';
            flag_X = true
        }
        box.disabled = true;
        totalMovesPlayed++;
        let winnerFound = checkWinner(box);
        if(totalMovesPlayed == 9 && !winnerFound){
            disableButtons();
            output.innerText = 'Game draw'
            console.log('Game is Draw');
        }
    })
});

let checkWinner = (box)=>{
    for (let pattern of winningPattern){

        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 == posVal2 && posVal2 == posVal3){
                output.innerHTML = `Winner is ${posVal1}`
                console.log("The winner is found ",posVal1);
                disableButtons();
                return true;
            }
        }
    };
}

let disableButtons = ()=>{
    boxes.forEach(box=>{
        box.disabled = true;
    })
}
let enableButtonsAndResetState = ()=>{
    boxes.forEach(box=>{
        box.disabled = false;
        box.innerHTML = '';
    })
}
