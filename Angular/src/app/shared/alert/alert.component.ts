import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
@Input()color:string='blue'

  constructor() {
    console.log(this.bgcolor)
  }
get bgcolor(){
    return `bg-${this.color}-400`
  }
  
}
  