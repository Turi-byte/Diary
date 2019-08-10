import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  entries:Entry = [
    {id:1,title:'. Going for movies',description:'I was very excited for the new Spider-man movie!'},
    {id:2,title:'. Ate Lisagna',description:'Lucy made the best lisagna today'},
    {id:3,title:'. Worked out at Parklands',description:'Going heavy on the bench and the squat!'},
    {id:4,title:'. Went partying at Jiweke',description:'Party like there aint no tomorrow'},
    {id:5,title:'. Bike riding in Limuru',description:'Nothing beats the serene view of Limuru'},
    {id:6,title:'. Presented my project at Moringa',description:'The startup idea looks lucrative'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
