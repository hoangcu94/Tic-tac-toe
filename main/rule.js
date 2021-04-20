class Rule {
    $backdrop;
    $btnOk;

    constructor() {
        this.$backdrop = document.createElement("div");
        this.$backdrop.classList.add("vh100", "vw100", "d-flex", "centering");
        this.$backdrop.style.position = "fixed";
        this.$backdrop.style.top = "0";
        this.$backdrop.style.left = "0";
        this.$backdrop.style.backgroundColor = "rgba(0, 0, 0, 0.35)";
        this.$backdrop.style.display = "none";

        this.$btnOk = document.createElement("button");
        this.$btnOk.type = "button";
        this.$btnOk.innerHTML = "OK";
        this.$btnOk.classList.add("btn", "btn-third");
        this.$btnOk.addEventListener("click", () => {
            this.setVisible(false);
        });
    }

    setVisible = (value) => {
        if (value) {
            this.$backdrop.style.display = "flex";
        } else {
            this.$backdrop.style.display = "none";
        }
    };
    
    initRender = (container) => {
        const flexContainer = document.createElement("div");
        flexContainer.classList.add("d-flex", "flex-column", "item");
        flexContainer.style.backgroundColor = "white";
        flexContainer.style.width = "500px";
        flexContainer.style.height = "275px";
        flexContainer.style.backgroundColor = "rgb(161, 213, 243)";

        const p = document.createElement("p");
        p.innerHTML = "The object of Tic Tac Toe is to get three in a row. You play on a three by three game board. The first player is known as X and the second is O. Players alternate placing Xs and Os on the game board until either oppent has three in a row or all nine squares are filled. X always goes first, and in the event that no one has three in a row, the stalemate is called a cat game.";
        p.style.padding = "20px"
        const div = document.createElement("div");
        div.classList.add("d-flex", "centering");
        div.style.height = "75px";

        const div2 = document.createElement("div");
        div2.classList.add("d-flex", "centering", "conversation-item", "grow-1");
        div2.style.marginTop = "9px";
        div2.appendChild(p);

        flexContainer.appendChild(div2);

        div.appendChild(this.$btnOk)

        flexContainer.appendChild(div);

        this.$backdrop.appendChild(flexContainer);
        container.appendChild(this.$backdrop);
    }
}

export default Rule;