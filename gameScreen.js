import Title from "./main/title.js";
import ConversationInfo from "./main/conversationInfo.js";
import MessageList from "./main/messageList.js";
import Composer from "./main/composer.js";
import Box from "./main/box.js";

class GameScreen {
    title;
    composer;
    myGameBoard;
    messageList;
    conversationInfo;

    $container;
    constructor() {
        this.title = new Title("");
        this.conversationInfo = new ConversationInfo();
        this.messageList = new MessageList();
        this.composer = new Composer();
        this.box = new Box();
        this.$container = document.createElement("div");
        this.$container.style.position = "fixed";
        this.$container.style.top = "0";
        this.$container.style.left = "0";
        this.$container.classList.add("vh100", "vw100", "d-flex", "flex-column");
        
        
    }

    
    
    initRender = (container) => {
        const div1 = document.createElement("div");
        div1.classList.add("item");
        div1.style.height = "58px";
        this.title.initRender(div1);

        const div2 = document.createElement("div");
        div2.classList.add("d-flex", "grow-1", "item");
        
        this.conversationInfo.initRender(div2);
        const div4 = document.createElement("div");
        div4.classList.add("grow-1", "d-flex", "centering", "item")
        this.box.initRender(div4)

        div2.appendChild(div4)
        const div3 = document.createElement("div");
        div3.classList.add("d-flex", "flex-column", "item");
        div3.style.width = "300px"
        div2.appendChild(div3);

        this.messageList.initRender(div3);        
        this.composer.initRender(div3);

        this.$container.appendChild(div1);
        this.$container.appendChild(div2);
        container.appendChild(this.$container);
    }
};




export default GameScreen;