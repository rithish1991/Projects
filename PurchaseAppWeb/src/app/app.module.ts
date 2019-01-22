import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent }  from './login/login.component';
import {  homeComponent } from './home/home.component';
import { PurchaseRequestComponent } from './purchaseRequest/purchaseRequest.component';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';
import {InputTextModule} from 'primeng/primeng';
import{commonPropertiesModel} from './commons/common.property';
import {loginModel} from './login/login.component.model';
import 'jquery';
import {MenuModule,MenuItem,TabMenuModule,TabMenu,ButtonModule,MenubarModule,StepsModule} from 'primeng/primeng';//Prime NG
import { AuthGuard } from './commons/common.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    homeComponent,
    PurchaseRequestComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
     InputTextModule,MenuModule,TabMenuModule,ButtonModule,MenubarModule,StepsModule//Prime NG
  ],
  providers: [commonPropertiesModel,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
