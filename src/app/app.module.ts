import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {LoginModule} from "./modules/login/login.module";
import {AuthService} from "./services/auth.service";
import {LocalStorageService} from "./services/local-storage.service";
import {UserService} from "./services/user.service";

import {LayoutComponent} from "./modules/layaut/layout.component";
import {RoutesModule} from "./routes/routes.module";


@NgModule({
  imports:      [ BrowserModule,LoginModule,RoutesModule],
  declarations: [AppComponent,LayoutComponent],
  providers:[AuthService,LocalStorageService,UserService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
