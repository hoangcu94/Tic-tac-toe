import GameScreen from "../gameScreen.js";
import app from "../index.js";

class Conversation {
    id
    user;
    name;
    onClick;
    gameScreen;

    $txtName;
    $txtNoOfUsers;
    $btnJoin;
    $container;

    constructor(id, name, users, onClick) {
        this.id = id;
        this.name = name;
        this.users = users;
        
        this.$txtName = document.createElement("div");
        this.$txtName.innerHTML = name;
        this.$txtName.classList.add("grow-1");
        this.$txtName.style.fontSize = "24px";
        
        this.$txtNoOfUsers = document.createElement("small");
        this.$txtNoOfUsers.innerHTML = this.users + "  user(s)";
        this.$txtNoOfUsers.style.width = "70px";
        this.$txtNoOfUsers.classList.add("d-flex", "centering");
        
        this.$btnJoin = document.createElement("button");
        this.$btnJoin.innerHTML = "Join";
        this.$btnJoin.classList.add("btn");
        this.$btnJoin.addEventListener("click", this.changeGameScreen)

        this.$container = document.createElement("div");
        this.$container.classList.add("conversation-item");
        
        this.onClick = onClick;

    }
    changeGameScreen = () => {
        this.gameScreen = new GameScreen();
        app.changeActiveScreen(this.gameScreen)
    }


    setActive = (isActive) => {
        if(isActive) {
            this.$container.classList.add("active");
        } else {
            this.$container.classList.remove("active");
        }
    }

    initRender = (container) => {
        this.$container.addEventListener("click", () => {
            this.onClick(this);
        });
        this.$container.classList.add("conversation-item", "d-flex");
        this.$container.appendChild(this.$txtName);
        this.$container.appendChild(this.$txtNoOfUsers);
        this.$container.appendChild(this.$btnJoin);

        container.appendChild(this.$container);
    }
}

export default Conversation;