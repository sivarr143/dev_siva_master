import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class SelectedValuesService {
  season : any;
  menuoptions : any;
  contentselect : any;
  displayedColumns : any[]=[];
  data : any;

  
  constructor() {
      this.displayedColumns=['Date','city','venue','first team','second team','winner'];
   }
}
