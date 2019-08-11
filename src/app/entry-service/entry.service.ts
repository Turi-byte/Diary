import { Injectable } from '@angular/core';
import { Entry } from '../entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  getEntries(){
    return Entry
  }

  constructor() { }
}
