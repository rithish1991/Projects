/**
 * New typescript file
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Http  , Headers} from '@angular/http';
import {MenuModule,MenuItem,TabMenuModule,TabMenu,InputTextModule,ButtonModule} from 'primeng/primeng';
import { loginComponentService }  from './login.component.Service';
import {loginModel} from './login.component.model';
import{commonPropertiesModel} from 'app/commons/common.property';
import 'jquery';
@Component({
    
    templateUrl: './login.component.html',
  styleUrls: ['./login.css'],
  providers: [loginComponentService]
  
})
export class LoginComponent implements OnInit {
    model: any={ };
    loading = false;
    error = '';
    userId:string;
    password:string;
    respData:string;
    securedToken:string;
    private items: MenuItem[];
    loginObj: loginModel[];


    constructor(
   
        private router: Router,private http: Http,private logService:loginComponentService, private commonProp:commonPropertiesModel
        ) { }

    ngOnInit() {
      
      
      // jQuery("body").css({"background-image":"url('images/fcaCars.jpg')", "background-repeat":"no-repeat"});
    
        
    } 
 
  authenticate()
  {
    
          this.logService.getToken(this.userId,this.password).subscribe(//call the post
                data => {

                    localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);
                    this.logService.authenticate(this.userId,this.password,localStorage.getItem("token")).subscribe(

                           data => {
                             alert(data);
                             this.successAuthenticate(data);

                           },
                        error => alert("invalid Token")

                    );

                }, // put the data returned from the server in our variable
                error => alert("Invalid username or password"), // in case of failure show this message
                () => {}//run this code in all cases
            );
   }

getAuthenticationDetails(tokenData:string)
{



}


  successAuthenticate(data:any[])
  {
    // alert("json data  "+data[0].userName +"   Session Exists"+this.commonProp.userSession);


    if(data.length>0)
    {

        alert("login successfull"+data[0]["userId"]);
        alert(data.length);
        console.log(data[0]["userId"]);
       jQuery("body").css({"background-image":""});
       sessionStorage.setItem("uname",data[0]["userName"]);
       this.commonProp.userName=data[0]["userName"];
         this.commonProp.userSession=true;
         sessionStorage.setItem("sessionId",data[0]);
        this.router.navigate(['/home']);
    }
    else{

        alert("login unsuccessfull");
        this.commonProp.userSession=false;
    }
  }
    
}
