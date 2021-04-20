const boxes = Array.from(document.getElementsByClassName("box"));
console.log(boxes);

const O_Text = "O";
const X_Text = "X";
let currentPlayer = O_Text;
const spaces = ["", "", "", "", "", "", "", "", ""];

class Box {
    box;
    $winner;
    $txtWinner;
    $btnRestart;

    constructor() {
        this.box0 = document.createElement("div");
        this.box0.classList.add("box");
        this.box0.id = "0";
        this.box0.addEventListener("click", boxClicked);

        this.box1 = document.createElement("div");
        this.box1.classList.add("box");
        this.box1.id = "1";
        this.box1.addEventListener("click", boxClicked);

        this.box2 = document.createElement("div");
        this.box2.classList.add("box");
        this.box2.id = "2";
        this.box2.addEventListener("click", boxClicked);

        this.box3 = document.createElement("div");
        this.box3.classList.add("box");
        this.box3.id = "3";
        this.box3.addEventListener("click", boxClicked);

        this.box4 = document.createElement("div");
        this.box4.classList.add("box");
        this.box4.id = "4";
        this.box4.addEventListener("click", boxClicked);

        this.box5 = document.createElement("div");
        this.box5.classList.add("box");
        this.box5.id = "5";
        this.box5.addEventListener("click", boxClicked);

        this.box6 = document.createElement("div");
        this.box6.classList.add("box");
        this.box6.id = "6";
        this.box6.addEventListener("click", boxClicked);

        this.box7 = document.createElement("div");
        this.box7.classList.add("box");
        this.box7.id = "7";
        this.box7.addEventListener("click", boxClicked);

        this.box8 = document.createElement("div");
        this.box8.classList.add("box");
        this.box8.id = "8";    
        this.box8.addEventListener("click", boxClicked);
        
        this.flexContainer = document.createElement("div");
        this.flexContainer.style.width = "227px";
        this.flexContainer.style.height = "227px";
        this.flexContainer.style.border = "1px solid black";
        this.flexContainer.classList.add("d-flex", "flex-wrap", "centering");

        this.$txtWinner = document.createElement("div");
        this.$txtWinner.innerHTML = "9999";
        this.$btnRestart = document.createElement("button");
        this.$btnRestart.innerHTML = "Restart";
        this.$btnRestart.addEventListener("click", () => {
            restart();
        })
    };

    // restart = () => {
    //     this.box8.innerHTML = "";
    //     this.box7.innerHTML = "";
    //     this.box6.innerHTML = "";
    //     this.box5.innerHTML = "";
    //     this.box4.innerHTML = "";
    //     this.box3.innerHTML = "";
    //     this.box2.innerHTML = "";
    //     this.box1.innerHTML = "";
    //     this.box0.innerHTML = "";
        
    // }

    setWinner = (content) => {
        this.$txtWinner.innerHTML = content;
        console.log(this.$txtWinner);
        if (content === "") {
            this.$txtWinner.style.display = "none";
        } else {
            this.$txtWinner.style.display = "block";
        }
    }
    
    initRender = (container) => {

        this.flexContainer.appendChild(this.box0);
        this.flexContainer.appendChild(this.box1);
        this.flexContainer.appendChild(this.box2);
        this.flexContainer.appendChild(this.box3);
        this.flexContainer.appendChild(this.box4);
        this.flexContainer.appendChild(this.box5);
        this.flexContainer.appendChild(this.box6);
        this.flexContainer.appendChild(this.box7);
        this.flexContainer.appendChild(this.box8);

        const div = document.createElement("div");
        div.classList.add("d-flex", "centering", "flex-column")
        div.appendChild(this.$btnRestart);
        div.appendChild(this.$txtWinner);
        div.appendChild(this.flexContainer);

        container.appendChild(div)
    }
};

// const restart = () => {
//     this.box8.innerHTML = "";
//     this.box7.innerHTML = "";
//     this.box6.innerHTML = "";
//     this.box5.innerHTML = "";
//     this.box4.innerHTML = "";
//     this.box3.innerHTML = "";
//     this.box2.innerHTML = "";
//     this.box1.innerHTML = "";
//     this.box0.innerHTML = "";
    
// }

const boxClicked = (e) => {
    const id = e.target.id;
    console.log(e.target.id)
    if (e.target.innerHTML === "") {
        
        if (spaces[id] === "") {
            spaces[id] = currentPlayer;
            e.target.innerHTML = currentPlayer;
            // console.log(spaces)
            if (playerHasWon()) {
                return;
            }
            if (currentPlayer === "") {
                return;
            }           
            if (currentPlayer === O_Text) {
                currentPlayer = X_Text;
            } else {
                currentPlayer = O_Text;
            }
        }
    };
};

const playerHasWon = () => {
    if (spaces[0] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            console.log(`${currentPlayer} has win`);
            currentPlayer = "";
            return;
        }
         if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} has win`);
            currentPlayer = "";
            return;
        }
    }
    if (spaces[4] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} has win`);
            currentPlayer = "";

            return;
        }
         if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
             console.log(`${currentPlayer} has win`);
            currentPlayer = "";
            return true;
        }
        if (spaces[0] === currentPlayer && spaces[8] === currentPlayer) {
            console.log(`${currentPlayer} has win`);
            currentPlayer = "";
            return true;
        }
         if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
             console.log(`${currentPlayer} has win`);
            currentPlayer = "";
            return true;
        }
    }
    if (spaces[8] === currentPlayer) {
        if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} has win`);
            currentPlayer = "";
            return true;
        }
         if (spaces[7] === currentPlayer && spaces[6] === currentPlayer) {
             console.log(`${currentPlayer} has win`);
            currentPlayer = "";
            return true;
        }
    }
}




export default Box;