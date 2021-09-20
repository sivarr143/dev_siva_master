import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Match } from 'src/app/services/match';
import { MatchService } from 'src/app/services/match.service';
import { SelectedValuesService } from 'src/app/services/selected-values.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  componentsel: any = this.sel.contentselect;
  sample: any[] = [];
  result: Match[] = [];
  displayedColumns: any[] = [];
  cols: any[] = [];
  dataSource: MatTableDataSource<any>;


  set Match(Match: any) {
    if (!Match || Match.length <= 0) return;
    this.displayedColumns = Object.keys(Match);
    this.dataSource = new MatTableDataSource<any>(Match);
  }

  constructor(private matchService: MatchService, private sel: SelectedValuesService) {
    this.dataSource = this.sel.data;
  }

  ngOnInit(): void {

    this.cols = ['matchDate', 'city', 'venue', 'firstTeam', 'secondTeam', 'winner'];
    this.matchService.getMatchlist()
      // .pipe(map(
      //   data => data.map(this.Match)=>(this.Match)))
      .subscribe(
        res => {
          this.Match = res;
          this.Match = this.toTableData(res);
        }
      )
  }

  toTableData(Match: any) {
    return Object.keys(this.Match).map(d => {
      // let row={}
      // row[d] = data[d];
      return { key: d, value: this.Match[d] };
    })
  }

}
