import {Injectable,Inject}  from '@angular/core'
import {Http, Response,Headers,RequestOptions, URLSearchParams} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import{commonPropertiesModel} from 'app/commons/common.property';
import {loginModel} from './login.component.model';
import 'rxjs/Rx';
@Injectable()
export class loginComponentService
  {
 loginObj: loginModel = new loginModel();
  constructor(private httpService: Http,public compModel:commonPropertiesModel){ }
  getToken(userId:string,password:string)
  {
    

      this.loginObj.userId=userId;
      this.loginObj.password=password;
      let url = "http://"+this.compModel.ipaddress+":"+this.compModel.port+"/login/loginController";
      let body = JSON.stringify(this.loginObj);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.httpService.post(url, body, options)
                
   
  }
  authenticate(userId:string,password:string,token)
  {
 this.loginObj.userId=userId;
      this.loginObj.password=password;
      let url = "http://"+this.compModel.ipaddress+":"+this.compModel.port+"/purchase/authenticate";
let body = JSON.stringify(this.loginObj);
let headers = new Headers({ 'Content-Type': 'application/json' ,'Authorization':'Bearer '+token });
      let options = new RequestOptions({ headers: headers });

      return this.httpService.post(url, body, options)
                .map(res =>  res.json())
  }
  
  
  
  }