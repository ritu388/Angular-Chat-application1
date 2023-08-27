import { Component, OnInit } from '@angular/core';
import { SocketServiceService } from '../socket-service.service';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css']
})
export class RecieverComponent implements OnInit{
  messages: string[] = [];
  
  constructor(public socketService: SocketServiceService){

  }

  ngOnInit(): void {
    console.log('enter in reciever component');
    this.socketService.receiveData().subscribe((data: string) => {
      console.log('data', data);
      if(data) {
        this.messages.push(data);
        console.log('message is recieved', this.messages);
      }
      
    });
  }

}
