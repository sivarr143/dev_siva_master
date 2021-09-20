import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/services/match';
import { MatchService } from 'src/app/services/match.service';
import { SelectedValuesService } from 'src/app/services/selected-values.service';

interface Chart {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})



export class ChartComponent implements OnInit {
  chartType:string ='';
  displayedColumns: string[]=[];

  set Match(Match:any){
    if(!Match || Match.length <= 0) return;
    this.displayedColumns = Match[0];
    //this.dataSource = new MatTableDataSource<any>(Match);
  }

  constructor(private matchService: MatchService, private sel: SelectedValuesService) { }

  ngOnInit(): void {
    this.matchService.getMatchlist()
      // .pipe(map(
      //   data => data.map(this.Match)=>(this.Match)))
      .subscribe(
        res => {
          this.Match = res;
          //this.Match = this.toTableData(res);
        }
      )
  }

  chart: Chart[] = [
    {value: 'bar', viewValue: 'BarChart'},
    {value: 'pie', viewValue: 'PieChart'}
    
  ];

  validateChart(obj : any){
    console.log(obj);
    return obj = 'bar' ? true:false ;
  }

}
