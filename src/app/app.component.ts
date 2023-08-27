import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RealTimeProject';
  hideTitle = false;
  constructor(public router: Router){

  }
  redirectToChatApp(){
    this.router.navigate(['/text-editor']);
    this.hideTitle = true;
  }
}
