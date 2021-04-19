class Conversation {
    id
    user;
    name;
    onClick;

    $txtName;
    $txtNoOfUsers;
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
        
        this.$container = document.createElement("div");
        this.$container.classList.add("conversation-item");
        
        this.onClick = onClick;
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

        container.appendChild(this.$container);
    }
}

export default Conversation;