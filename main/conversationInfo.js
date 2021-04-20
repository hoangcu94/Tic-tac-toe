class ConversationInfo {
    $userList;
    $form;
    $txtEmail;
    $btnKick;

    activeConversation;
    constructor() {
        this.$form = document.createElement('form');
        this.$form.addEventListener('submit',this.onSubmit);

        this.$txtEmail = document.createElement('input');
        this.$txtEmail.type = "email";
        this.$txtEmail.placeholder = 'Enter your friend name...';
        this.$txtEmail.classList.add('grow-1');

        this.$btnAdd = document.createElement('button');
        this.$btnAdd.innerHTML = "Add";
        this.$btnAdd.type = 'submit';

        this.$userList = document.createElement("ul");
    };

    onSubmit = (event) => {
        event.preventDefault();
        const email = this.$txtEmail.value;
        db.collection("conversations").doc(this.activeConversation.id).update({
            name: this.activeConversation.name,
            users: this.activeConversation.users.concat(email),
        });
    };

    deleteUser = (email) => {
        db.collection('conversations').doc(this.activeConversation.id).update({
            users: this.activeConversation.users.filter((item) => {
                return item !== email;
            })
        });
    };

    setActiveConversation = (conversation) => {
        this.activeConversation = conversation;
        this.$userList.innerHTML = "";
        this.activeConversation.users.forEach((email) => {
            const li = document.createElement("li");
            li.innerHTML = email;
            li.addEventListener('click', () => {
                this.deleteUser(email);
            });

            this.$userList.appendChild(li);
            console.log(this.$userList);
        });
    }

    initRender = (container) => {
        const infoContainer = document.createElement("div");
        infoContainer.style.width = "300px";
        infoContainer.classList.add("d-flex", "flex-column");
        
        const div = document.createElement("div");
        div.style.height = "30px";
        div.classList.add('d-flex', 'item');
        div.appendChild(this.$txtEmail);
        div.appendChild(this.$btnAdd);

        infoContainer.appendChild(div);
        infoContainer.appendChild(this.$userList);

        container.appendChild(infoContainer);
    }
}

export default ConversationInfo;