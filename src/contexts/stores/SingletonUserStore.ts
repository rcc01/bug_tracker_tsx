import PermissionLevel from "../../models/PermissionLevel";

class UserStoreClass {
  private name: string;
  private email: string;
  private permissionLevel: PermissionLevel | null;

  constructor(name: string, email: string, permissionLevel: PermissionLevel | null) {
    this.name = name;
    this.email = email;
    this.permissionLevel = permissionLevel;
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getEmail() {
    return this.email;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public getPermissionLevel() {
    return this.permissionLevel;
  }

  public setPermissionLevel(permissionLevel: PermissionLevel) {
    this.permissionLevel = permissionLevel;
  }

  public isLoggedIn() {
    return this.permissionLevel !== null;
  }
}

const userStore = new UserStoreClass('', '', null);
export default userStore;
export { UserStoreClass };
