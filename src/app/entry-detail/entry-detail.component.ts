import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from '../entry';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EntryService } from '../entry-service/entry.service';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {
  
  entry:Entry;

  constructor(private route:ActivatedRoute,private service:EntryService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.entry = this.service.getEntry(id)
  }

}
