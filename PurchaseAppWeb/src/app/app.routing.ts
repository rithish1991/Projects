import { Routes, RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { LoginComponent }  from './login/login.component';
import {  homeComponent } from './home/home.component';
import { PurchaseRequestComponent } from './purchaseRequest/purchaseRequest.component';
import { AuthGuard } from './commons/common.guard';
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {path:'home',canActivate: [AuthGuard],component:homeComponent},
     { path: '',canActivate: [AuthGuard], component:homeComponent},
      {path:'purchaseReq',canActivate: [AuthGuard],component:PurchaseRequestComponent},

];

export const routing = RouterModule.forRoot(appRoutes);