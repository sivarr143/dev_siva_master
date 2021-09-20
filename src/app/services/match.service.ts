import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from './match';
import { SelectedValuesService } from './selected-values.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private http : HttpClient, private sel : SelectedValuesService) { }

  getMatchlist(): Observable<Match[]>{
    return this.http.get<Match[]>('http://localhost:7777/matches/' + this.sel.menuoptions + "/" + this.sel.season);
  }
  getTopScorers(): Observable<any>{
    return this.http.get<any>('http://localhost:7777/matches/' + this.sel.menuoptions + "/" + this.sel.season);
  }
}
