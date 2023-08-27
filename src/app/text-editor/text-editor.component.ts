import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SocketServiceService } from '../socket-service.service';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit{
  @ViewChild('editor')editorRef!: ElementRef  
  @ViewChild('text1')TextRef!:ElementRef;
  public editorText: string = '';
  messages: string[] = [];
  message: string = '';
  reciever: string = '';
  recieved: string[] = [];
  date = new Date();
  constructor(private socketService: SocketServiceService){
  }
  ngOnInit() {
    // this function are used to recieved data
    this.socketService.receiveData().subscribe((data: string) => {
      console.log('data', data);
      if(data) {
        this.messages.push(data);
        console.log('message is recieved', this.messages);
      }
    });
    this.displayRecieverMsg(); 
  }
 

  //this function are used to send data to server
  sendMessage(): void {
    this.message = this.editorRef.nativeElement.value;
    if (this.message.trim() !== '') {
      this.socketService.sendData(this.message);
      this.editorRef.nativeElement.value = '';
    }
  }

  sendMessageToSender():void {
    this.reciever = this.TextRef.nativeElement.value;
    if(this.reciever.trim() !== '') {
      this.socketService.sendData(this.reciever);
      this.TextRef.nativeElement.value = ''; // clear the text
    }
  }

  displayRecieverMsg(){
    this.socketService.receiveData().subscribe((data1: string) => {
      if(data1) {
        this.recieved.push(data1);
        console.log('message is recieved', this.recieved);
      }
    });
  }
  
}
