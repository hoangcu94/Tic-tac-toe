class Title {
    name;

    $txtName;
    constructor(name) {
        this.name = name;
        this.$txtName = document.createElement("div");
        this.$txtName.innerHTML = this.name;
    }

    setActiveConversation = (activeConversation) => {
        this.name = activeConversation.name;
        this.$txtName.innerHTML = this.name;
    }

    initRender = (container) => {
        const div = document.createElement("div");
        div.appendChild(this.$txtName);

        container.appendChild(div);
    }
};

export default Title;