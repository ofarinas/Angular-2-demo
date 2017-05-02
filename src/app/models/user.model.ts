import {Expose} from "class-transformer";

export class User {
  private id: number;
  @Expose({name: "userName"})
  private name: string;

  public getName(): string {
    return this.name;
  }
}
