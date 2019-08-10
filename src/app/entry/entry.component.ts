import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  entries:Entry[] = [
    new Entry(1,'. Going for movies','I was very excited for the new Spider-man movie!',new Date(2019,9,9)),
    new Entry(2,'. Ate Lisagna','Lucy made the best lisagna today',new Date(2019,9,9)),
    new Entry(3,'. Worked out at Parklands','Going heavy on the bench and the squat!',new Date(2019,9,10)),
    new Entry(4,'. Went partying at Jiweke','Party like there aint no tomorrow',new Date(2019,10,11)),
    new Entry(5,'. Bike riding in Limuru','Nothing beats the serene view of Limuru',new Date(2019,6,11)),
    new Entry(6,'. Presented my project at Moringa','The startup idea looks lucrative',new Date(2019,4,19)),
  ];
  
  toggleDetails(index){
    this.entries[index].showDescription =!this.entries[index].showDescription;
  }

  deleteEntry(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete this entry "${this.entries[index].title}"?`)
      if (toDelete){
        this.entries.splice(index,1);
      }
    }
  }

  addNewEntry(entry){
    let entryLength = this.entries.length;
    entry.id= entryLength+1;
    entry.completeDate = new Date(entry.completeDate)
    this.entries.push(entry)
  }

  constructor() { }

  ngOnInit() {
  }

}
