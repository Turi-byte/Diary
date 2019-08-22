import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { HttpClient } from '@angular/common/http';
import { EntryService } from '../entry-service/entry.service';
import { AlertService } from '../alert-service/alert.service';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  entries: Entry[];
  alertService: AlertService;
  quote:   go    this.router.navigate(['/entries',id])
Quote;

ToUrl(id){
  }

  deleteEntry(index){
    let toDelete = confirm(`Are you sure you want to delete this entry "${this.entries[index].title}"?`)
    if (toDelete) {
      this.entries.splice(index, 1);
      this.alertService.alertMe("The Entry has been deleted")
    }
  }

  addNewEntry(entry) {
    let entryLength = this.entries.length;
    entry.id = entryLength + 1;
    entry.completeDate = new Date(entry.completeDate)
    this.entries.push(entry)
  }

  constructor(entryService: EntryService, alertService: AlertService, private http: HttpClient, private quoteService: QuoteRequestService, private router: Router) {
    this.entries = entryService.getEntries();
    this.alertService = alertService;
  }

  ngOnInit() {
    interface ApiResponse {
      author: string;
      quote: string;
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data => {
      //Successful API request
      this.quote = new Quote(data.author, data.quote), err => {
        this.quote = new Quote("Winston Churchill", "Never never give up!")
        console.log("An error occurred")
      }
    })
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }
}

