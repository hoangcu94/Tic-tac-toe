class CreateConversationModal {
    $backdrop;
    $txtConversation;
    $btnCreate;
    $btnClose;
    $errorMessage;

    constructor() {
        this.$backdrop = document.createElement("div");
        this.$backdrop.classList.add("vh100", "vw100", "d-flex", "centering");
        this.$backdrop.style.position = "fixed";
        this.$backdrop.style.top = "0";
        this.$backdrop.style.left = "0";
        this.$backdrop.style.backgroundColor = "rgba(0, 0, 0, 0.35)";
        this.$backdrop.style.display = "none";

        this.$txtConversation = document.createElement("input");
        this.$txtConversation.type = "text";
        this.$txtConversation.placeholder = "Enter your name rooms";
        this.$txtConversation.classList.add("form-input","m-b-md");

        this.$btnCreate = document.createElement("button");
        this.$btnCreate.type = "submit"
        this.$btnCreate.innerHTML = "Create";
        this.$btnCreate.classList.add("btn", "btn-secondary", "m-g-t" )
        this.$btnCreate.addEventListener("click", this.onSubmit)

        this.$btnClose = document.createElement("button");
        this.$btnClose.type = "button";
        this.$btnClose.innerHTML = "Close";
        this.$btnClose.classList.add("btn", "btn-third", "m-t-sm", "m-g-t")
        this.$btnClose.addEventListener("click", () => {
            this.setVisible(false);
        });

        this.$errorMessage = document.createElement("small");
        this.$errorMessage.classList.add("error");
        this.$errorMessage.innerHTML = "";
    }

    onSubmit = (event) => {
        event.preventDefault();
        const nameRoom = this.$txtConversation.value;
        const authUser = firebase.auth().currentUser;
        console.log(nameRoom, authUser);

        if (nameRoom === "") {
            this.setErrorMessage("Bạn phải nhập tên phòng");
            return;
        }
        this.setErrorMessage("");

        db.collection("conversations").add({
            name: nameRoom,
            creator: authUser.email,
            users: [authUser.email],
        })
        .then(() => {
            this.setVisible(false);
        });       
    };

    setVisible = (value) => {
        if (value) {
            this.$backdrop.style.display = "flex";
        } else {
            this.$backdrop.style.display = "none";
        }
    };
    setErrorMessage = (content) => {
        this.$errorMessage.innerHTML = content;
        if (content === "") {
            this.$errorMessage.style.display = "none";
        } else {
            this.$errorMessage.style.display = "block";
        }
    }

    initRender = (container) => {
        const flexContainer = document.createElement("div");
        flexContainer.classList.add("d-flex", "flex-column", "centering", "item");
        flexContainer.style.backgroundColor = "white";
        flexContainer.style.width = "500px";
        flexContainer.style.height = "250px";
        flexContainer.style.backgroundColor = "rgb(161, 213, 243)";


        const title = document.createElement("h2");
        title.innerHTML = "Tạo trận đấu";
        title.classList.add("m-b-md")

        flexContainer.appendChild(title);
        flexContainer.appendChild(this.$errorMessage);
        flexContainer.appendChild(this.$txtConversation);

        const div = document.createElement("div");
        div.classList.add("d-flex", "space-between", "align-center")
        div.appendChild(this.$btnCreate);
        div.appendChild(this.$btnClose);
        flexContainer.appendChild(div);

        this.$backdrop.appendChild(flexContainer);
        container.appendChild(this.$backdrop);
    }    
}

export default CreateConversationModal;