import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectedValuesService } from './selected-values.service';

@Injectable({
  providedIn: 'root'
})
export class TesthelloworldServiceService implements OnInit {

  mostrun: any;

  constructor(private http: HttpClient, private sel: SelectedValuesService) { }

  ngOnInit(){
    this.sel.season=2020;
    this.sel.menuoptions='topScorers';
    this.sel.contentselect='table';
    this.http.get<any>("http://localhost:7777/matches/" + this.sel.menuoptions + "/" + this.sel.season, { responseType: 'text' as 'json' }).subscribe(
      (data) => this.mostrun = data
    );
  }

  getdata(): Observable<any> {
    return this.http.get<any>("http://localhost:7777/helloWorld",{responseType: 'text' as 'json'});
  }
}
