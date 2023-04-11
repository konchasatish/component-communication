import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {
  constructor(private messageService: MessageService) { }

  sendMessage(): void {
      // send message to subscribers via observable subject
      this.messageService.sendMessage('Message from Home Component to App Component!');
  }

  clearMessage(): void {
      // clear message
      this.messageService.clearMessage();
  }

}
