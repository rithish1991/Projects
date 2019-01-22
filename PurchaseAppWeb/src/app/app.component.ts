import { Component } from '@angular/core';
import {MenubarModule,MenuItem} from 'primeng/primeng';
import{commonPropertiesModel} from 'app/commons/common.property';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  
   private items: MenuItem[];
  constructor(
   
        private commonProp:commonPropertiesModel
        ) { }
  
   ngOnInit() {
    
     this.items = [
                   
                    {label: 'File'}        ,
                    {label: 'Edit'}   ,
                    {label: 'View'} ,
                    {label: 'Search'} 
                ];
     
        

   }


        
iconclick()
{
    jQuery(".user_sec").toggle(5);
}

}
