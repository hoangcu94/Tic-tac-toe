class MessageList {
    $messagesContainer;
    activeConversation;
    messageListener;

    constructor() {
        this.$messagesContainer = document.createElement('div');
        this.$messagesContainer.classList.add('d-flex', 'f-column-reverse', 'grow-1', 'overflow-y');
        this.$messagesContainer.style.height = "0";

    }

    setActiveConversation = (conversation) => {
        this.activeConversation = conversation;
        this.$messagesContainer.innerHTML = "";
        this.setupMessageListener();
    }

    setupMessageListener = () => {
        if (this.messageListener) {
            this.messageListener()
        }
        this.messageListener = db
            .collection('messages')
            .where('conversationId', '==', this.activeConversation.id)
            .orderBy('sentAt')
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === 'added') {
                        const p = document.createElement('p');
                        const sender = document.createElement('div');
                        sender.innerHTML = change.doc.data().sender + " :";
                        const content = document.createElement('div');
                        content.innerHTML = change.doc.data().content;
    
                        p.appendChild(sender);
                        p.appendChild(content);
                        if (change.doc.data().sender === firebase.auth().currentUser.email) {
                            p.style.textAlign = "right";
                        }
                        this.$messagesContainer.prepend(p);                   
                    }
                });
            })
    }

    initRender = (container) => {
        container.appendChild(this.$messagesContainer);

    }
}

export default MessageList;