class Title {
    name;

    $txtName;
    constructor(name) {
        this.name = name;
        this.$txtName = document.createElement("div");
        this.$txtName.innerHTML = this.name;
    }
}