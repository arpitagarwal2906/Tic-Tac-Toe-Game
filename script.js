let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box Clicked");
        if (turno) {
            box.innerText = "0";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congrats!!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val1 = boxes[pattern[0]].innerText;
        let pos2val2 = boxes[pattern[1]].innerText;
        let pos3val3 = boxes[pattern[2]].innerText;

        if (pos1val1 !== "" && pos2val2 !== "" && pos3val3 !== "") {
            if (pos1val1 === pos2val2 && pos2val2 === pos3val3) {
                console.log("Winner", pos1val1);
                showWinner(pos1val1);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
