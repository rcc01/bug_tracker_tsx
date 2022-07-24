class UserStoreClass {
    private name: String;
    private email: String;

    constructor(name: String, email: String) {
        this.name = name;
        this.email = email;
    }

    public getName() {
        return this.name;
    }

    public setName(name: String) {
        this.name = name;
    }

    public getEmail() {
        return this.email;
    }
    
    public setEmail(email: String) {
        this.email = email;
    }
}

const userStore = new UserStoreClass("", "");
export default userStore;
export { UserStoreClass };