import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  entries:string[];
  constructor(){
    this.entries = ['Had a lovely Day,','Watched Hobbs & Shaw,','Ate lisanga']
  }
}
