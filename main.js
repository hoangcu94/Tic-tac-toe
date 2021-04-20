import ConversationList from "./main/conversationList.js";
// import GameScreen from "./gameScreen.js";
class Main {
    conversationList;
    gameScreen;

    constructor() {
        this.conversationList = new ConversationList();

        // this.gameScreen = new GameScreen();
    }

    initRender = (container) => {
        const flexContainer = document.createElement("div");

        const div = document.createElement("div");
        div.classList.add("vh100", "vw100", "d-flex", "flex-column",'main-bg' )
        const div1 = document.createElement("div");
        div1.classList.add( "d-flex",'flex-end', "align-center");
        const span = document.createElement("span");
        span.innerHTML = "HELLO!  " + firebase.auth().currentUser.displayName;  
        span.style.color = "white";
        span.style.marginRight = "20px";
        span.style.fontWeight = "bold"
        const btnLogOut = document.createElement("button");
        btnLogOut.innerHTML = "Log out";
        btnLogOut.classList.add('btn-third','btn')
        btnLogOut.addEventListener("click", () => {
            firebase.auth().signOut();
        });
        div1.appendChild(span);
        div1.appendChild(btnLogOut);

        const title = document.createElement("h1");
        title.innerHTML = "tic tac toe";
        title.classList.add("d-flex", "centering",'main-title');

        const div2 = document.createElement("div");
        div2.classList.add("grow-1", "d-flex", "centering");
        this.conversationList.initRender(div2);

        div.appendChild(div1);
        div.appendChild(title);
        div.appendChild(div2);

        flexContainer.appendChild(div);
        // this.gameScreen.initRender(flexContainer);
        container.appendChild(flexContainer);
    }
}

export default Main;