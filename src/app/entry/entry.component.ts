import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  entries:Entry[] = [
    new Entry(1,'. Going for movies','I was very excited for the new Spider-man movie!'),
    new Entry(2,'. Ate Lisagna','Lucy made the best lisagna today'),
    new Entry(3,'. Worked out at Parklands','Going heavy on the bench and the squat!'),
    new Entry(4,'. Went partying at Jiweke','Party like there aint no tomorrow'),
    new Entry(5,'. Bike riding in Limuru','Nothing beats the serene view of Limuru'),
    new Entry(6,'. Presented my project at Moringa','The startup idea looks lucrative')
  ];
  
  toggleDetails(index){
    this.entries[index].showDescription =!this.entries[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
