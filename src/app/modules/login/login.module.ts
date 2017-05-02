import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {LoginComponent} from "./login.component";

const routes: Routes = [
  // {path: 'login', component: SkillManagementComponent}

];

@NgModule({
  imports: [
    // RouterModule.forChild(routes),
  ],
  declarations: [
  LoginComponent
  ],
  providers: [],
  exports: [
    // RouterModule
  ]
})
export class LoginModule {
}
