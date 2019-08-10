import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {

  @Input () entry: Entry;
  @Output () isComplete = new EventEmitter<boolean>();

  entryDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
