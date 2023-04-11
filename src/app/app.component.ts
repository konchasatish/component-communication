import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './communication/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-communication';

  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService){
    this.subscription = this.messageService.getMessage().subscribe(message =>
      {
        console.log("Message: ", message);
        this.message = message;
      })
  }
  
}
