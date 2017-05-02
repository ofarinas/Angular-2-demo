import {Injectable} from "@angular/core";

import {UserService} from "./user.service";
import {plainToClass} from "class-transformer";
import {User} from "../models/user.model";
import {LocalStorageService} from "./local-storage.service";

@Injectable()
export class AuthService {
  static USER_TOKEN = 'token';

  constructor(private userService: UserService) {

  }

  public static userIsLogged(): boolean {
    return !!LocalStorageService.getValue(AuthService.USER_TOKEN);
  }

  // public login(loginData: any): void {
  //   LocalStorageService.setValue(AuthService.USER_TOKEN, loginData["token"]);
  //   this.userService.setCurrentUser(plainToClass(User, loginData["user"]));
  // }

  public static getUserToken(): string {
    return AuthService.userIsLogged() ? LocalStorageService.getValue(AuthService.USER_TOKEN) : '';
  }

  public static logOut(): void {
    LocalStorageService.setValue(AuthService.USER_TOKEN, "");
  }
}
