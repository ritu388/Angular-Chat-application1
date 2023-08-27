import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {
  private socket: any;
  constructor() { 
    // this line change the port with angular port 
    this.socket = io('http://localhost:3000', { transports: ['websocket'] }); 
  }
  
  // this function are used to send data from client to server
  sendData(data: string): void {
    this.socket.emit('sendData', data);
  }

  // this function are used to listen with the event and fetch the data from the server
  receiveData(): Observable<string> {
    return new Observable<string>((observer) => {
      this.socket.on('receiveData', (data: string) => {
        observer.next(data);
      });
    });
  }
}
