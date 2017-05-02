import {User} from "../models/user.model";
import {Injectable} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";
import {classToPlain, plainToClass} from "class-transformer";



@Injectable()
export class UserService {
  private currentUser: User;
  private readonly currentUserKey: string = "CURRENT_USER";

  constructor() {
    this.initCurrentUser();
  }

  public getCurrentUser(): User {
    return this.currentUser;
  }

  public setCurrentUser(user: any): void {
    this.currentUser = user;
    // LocalStorageService.setValue(this.currentUserKey, JSON.stringify(classToPlain(user)));
  }

  public resetCurrentUser(): void {
    this.currentUser = null;
    LocalStorageService.setValue(this.currentUserKey, null);
  }

  private initCurrentUser(): void {
    if (LocalStorageService.getValue(this.currentUserKey)) {
      // let user: any = plainToClass(User, JSON.parse(LocalStorageService.getValue(this.currentUserKey)));
      // this.currentUser = user;
    } else {
      this.currentUser = null;
    }
  }
}
