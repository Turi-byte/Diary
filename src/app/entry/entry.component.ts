import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry-service/entry.service';
import { AlertService } from '../alert-service/alert.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  
  entries:Entry[];
  alertService:AlertService;

  toggleDetails(index){
    this.entries[index].showDescription =!this.entries[index].showDescription;
  }

  deleteEntry(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete this entry "${this.entries[index].title}"?`)
      if (toDelete){
        this.entries.splice(index,1);
        this.alertService.alertMe("The goal has been deleted")
      }
    }
  }

  addNewEntry(entry){
    let entryLength = this.entries.length;
    entry.id= entryLength+1;
    entry.completeDate = new Date(entry.completeDate)
    this.entries.push(entry)
  }

  constructor(entryService:EntryService,alertService:AlertService){
    this.entries=entryService.getEntries();
    this.alertService=alertService;
  }

  ngOnInit() {
  }

}
