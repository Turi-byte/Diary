import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {

  @Input () entry: Entry;
  constructor() { }

  ngOnInit() {
  }

}
