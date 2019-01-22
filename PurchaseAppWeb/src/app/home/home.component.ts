import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Http  , Headers} from '@angular/http';
import {StepsModule,MenuItem} from 'primeng/primeng';
@Component({
    
    templateUrl: './home.component.html',
styleUrls: ['./home.css']
  
  
})
export class homeComponent  implements OnInit {



 private items: MenuItem[];
    
    
    
   


    ngOnInit() {
        this.items = [
            {label: 'Step 1'},
            {label: 'Step 2'},
            {label: 'Step 3'},
            {label: 'Step 4'},
            {label: 'Step 5'},
            {label: 'Step 6'},
            {label: 'Step 7'},
            {label: 'Step 8'},
            {label: 'Step 9'}
        ];
    }


}

