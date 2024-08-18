import { Component,OnInit,OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit ,OnDestroy{

  constructor(public modal:ModalService) {
    
    } 

    ngOnInit() {
        this.modal.register('auth');
    }


    ngOnDestroy() {
        
      this.modal.unRegister('auth');
    }
    
}
