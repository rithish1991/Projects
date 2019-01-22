import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { Router} from '@angular/router';
import{commonPropertiesModel} from 'app/commons/common.property';
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
 

constructor(
   
        private router: Router,private commonProp:commonPropertiesModel
        ) { }

  canActivate() {




if(sessionStorage.getItem("sessionId")==null || undefined)
{

            alert("you are not authorized user you can't access pages without logging in");
            this.router.navigate(['/login']);
            this.commonProp.userSession=false;
            
            return false;
}
this.commonProp.userName=sessionStorage.getItem("uname");
   this.commonProp.userSession=true;
    return true;
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

}

