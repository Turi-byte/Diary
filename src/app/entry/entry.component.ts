import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry'
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  entries:Entry = [
    {id:1, title:'Going for movies'},
    {id:2, title:'Ate Lisagna'},
    {id:3, title:'Worked out at Parklands'},
    {id:4, title:'Went partying at Jiweke'},
    {id:5, title:'Bike riding in Limuru'},
    {id:6, title:'Presented my project at Moringa'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
