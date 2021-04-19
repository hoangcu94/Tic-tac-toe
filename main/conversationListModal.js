import Conversation from "./conversation.js";

class ConversationListModal {
    $backdrop;
    $btnClose;
    $conversationListContainer;

    conversationList;
    activeConversation;

    constructor() {
        this.$backdrop = document.createElement("div");
        this.$backdrop.classList.add("vh100", "vw100", "d-flex", "centering");
        this.$backdrop.style.position = "fixed";
        this.$backdrop.style.top = "0";
        this.$backdrop.style.left = "0";
        this.$backdrop.style.backgroundColor = "rgba(0, 0, 0, 0.35)";
        this.$backdrop.style.display = "none";

        this.$btnClose = document.createElement("button");
        this.$btnClose.innerHTML = "Close";
        this.$btnClose.classList.add("btn", "btn-third", "m-r-bt");
        this.$btnClose.addEventListener("click", () => {this.setVisible(false)});

        this.$conversationListContainer = document.createElement("div");
        this.$conversationListContainer.classList.add('overflow-y');
        this.$conversationListContainer.style.backgroundColor = "rgb(218, 205, 205)";
        
        this.conversationList = [];
        this.setUpConversationListener();
    }

    setUpConversationListener = () => {
        db.collection("conversations").onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                const conversation = new Conversation(
                    change.doc.id,
                    change.doc.data().name,
                    change.doc.data().users.length,
                    (conversation) => {
                        this.setActiveConversation(conversation)
                    }
                );

                this.conversationList.push(conversation);

                conversation.initRender(this.$conversationListContainer);
            })
        })
    };

    setActiveConversation = (conversation) => {
        if (this.activeConversation) {
            this.activeConversation.setActive(false);
        }
        this.activeConversation = conversation;
        this.activeConversation.setActive(true);
    }

    setVisible = (value) => {
        if (value) {
            this.$backdrop.style.display = "flex";
        } else {
            this.$backdrop.style.display = "none";
        }
    }

    initRender = (container) => {
        const flexContainer = document.createElement("div");
        flexContainer.classList.add("item","d-flex", "flex-column");
        flexContainer.style.width = "680px";
        flexContainer.style.backgroundColor = "rgb(218, 205, 205)";

        const title = document.createElement("h1");
        title.innerHTML = "Find match with new friends";
        title.classList.add("d-flex", "centering");
        title.style.height = "100px"
        flexContainer.appendChild(title);
        const hr = document.createElement("hr");
        flexContainer.appendChild(hr);

        const div = document.createElement("div");
        
        flexContainer.appendChild(this.$conversationListContainer);
        this.$conversationListContainer.style.height = "450px";

        div.appendChild(this.$btnClose);
        flexContainer.appendChild(div);
        div.classList.add("d-flex", "flex-end");
        this.$backdrop.appendChild(flexContainer);
        container.appendChild(this.$backdrop);
    }
}

export default ConversationListModal;