import {Injectable} from "@angular/core";
@Injectable()
export class LocalStorageService {
  public static getValue(key: string): any {
    return localStorage.getItem(key) || null;
  }

  public static setValue(key: string, value: any): void {
    localStorage.setItem(key, value);
  }
}
