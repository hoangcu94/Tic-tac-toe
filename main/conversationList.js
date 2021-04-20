import CreateConversationModal from "./createConversationModal.js";
import ConversationListModal from "./conversationListModal.js";
import Rule from "./rule.js";

class ConversationList {
    $btnCreateConversation;
    $btnFindConversation;
    $btnRule;

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

        this.$btnRule = document.createElement("button");
        this.$btnRule.innerHTML = "Luật chơi";
        this.$btnRule.classList.add("btn", "btn-primary", "m-b-md");
        this.$btnRule.addEventListener("click", this.openRuleScreen);

        this.conversationList = [];

        this.createConversationModal = new CreateConversationModal();
        this.conversationListModal = new ConversationListModal();
        this.rule = new Rule();

    }

    openRuleScreen = () => {
        this.rule.setVisible(true);
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
        div.appendChild(this.$btnRule);

        flexContainer.appendChild(div);
        this.createConversationModal.initRender(flexContainer);
        this.conversationListModal.initRender(flexContainer);
        this.rule.initRender(flexContainer);

        container.appendChild(flexContainer);
    }
}

export default ConversationList;