import { Injectable } from '@angular/core';
import { Entries } from '../entries';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  getEntries(){
    return Entries
  }

  getEntry(id){
    for(let entry of Entries){
      if(entry.id == id){
        return entry;
      }
    }
  }

  constructor() { }
}
