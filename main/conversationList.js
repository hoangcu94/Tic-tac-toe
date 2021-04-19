import CreateConversationModal from "./createConversationModal.js";
import ConversationListModal from "./conversationListModal.js";

class ConversationList {
    $btnCreateConversation;
    $btnFindConversation;

    createConversationModal;
    conversationListModal;

    conversationList;
    

    constructor() {
        this.$btnCreateConversation = document.createElement("button");
        this.$btnCreateConversation.innerHTML = "Tạo trận đấu";
        this.$btnCreateConversation.addEventListener("click", this.openCreateConversationModal);
        this.$btnCreateConversation.classList.add("btn", "btn-primary", "m-b-md");

        this.$btnFindConversation = document.createElement("button");
        this.$btnFindConversation.innerHTML = "Tìm phòng";
        this.$btnFindConversation.classList.add("btn", "btn-primary", "m-b-md");
        this.$btnFindConversation.addEventListener("click", this.openConversationListModal);

        this.conversationList = [];

        this.createConversationModal = new CreateConversationModal();
        this.conversationListModal = new ConversationListModal();

    }

    openConversationListModal = () => {
        this.conversationListModal.setVisible(true);
    }
    
    openCreateConversationModal = () => {
        this.createConversationModal.setVisible(true)
    }

    initRender = (container) => {
        const flexContainer = document.createElement("div");

        const div = document.createElement("div");
        div.classList.add("d-flex", "flex-column", "centering");
        div.appendChild(this.$btnCreateConversation);
        div.appendChild(this.$btnFindConversation);

        flexContainer.appendChild(div);
        this.createConversationModal.initRender(flexContainer);
        this.conversationListModal.initRender(flexContainer);

        container.appendChild(flexContainer);
    }
}

export default ConversationList;