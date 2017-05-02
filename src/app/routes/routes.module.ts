import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {LoginComponent} from "../modules/login/login.component";

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [],
  declarations: [LoginComponent],
  exports: [
    RouterModule
  ]
})

export class RoutesModule {
  constructor() {

  }
}
