import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { SelectedValuesService } from '../services/selected-values.service';
import * as moment from 'moment';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

//   private subscription: Subscription = new Subscription;
// @Output() TimerExpired: EventEmitter<any> = new EventEmitter<any>();

//     @Input() SearchDate: moment.Moment = moment();
// @Input() ElapsTime: number = 3;

//   searchEndDate!: moment.Moment;
// remainingTime: number | undefined;
// minutes: number | undefined;
// seconds: number | undefined;

// everySecond: Observable<number> = timer(0, 1000);

  table: boolean=false;
  chart: boolean=false;
  // this.backend.getdata().subscribe(res => {
  //   if(this.sel.menuoptions !== undefined && this.sel.menuoptions === 'matchList'){
  //     this.sample.push(res);;
  //   }
  // });




  constructor(private sel: SelectedValuesService, private ref: ChangeDetectorRef) {
  

    if(this.sel.contentselect === 'table'){
      this.table=true;
    }
    else if(this.sel.contentselect === 'chart'){
      this.chart=true;
    }
    else{
      this.table=false;
      this.chart=false;
    }
  }

  ngOnInit() {
    // this.cols=['matchDate','city','venue','firstTeam','secondTeam','winner'];
    // this.matchService.getMatchlist()
    // // .pipe(map(
    // //   data => data.map(this.Match)=>(this.Match)))
    //   .subscribe(
    //   res=>{
    //   this.Match=res;
    //   this.Match=this.toTableData(res);
    //   }
    // )
    if(this.sel.contentselect === 'table'){
      this.table=true;
    }
    else if(this.sel.contentselect === 'chart'){
      this.chart=true;
    }
    else{
      this.table=false;
      this.chart=false;
    }
    

    // this.refresh();
  }

  // getData(){
  //   this.matchService.getMatchlist().subscribe(res=>{
  //     console.log(res);
  //     // this.data=res;
  //     let matches : Match[]=res;
  //     this.data=this.toTableData(matches);
  //     // this.data=JSON.stringify(res);
  //   })

      // refresh(){
      //   this.subscription = this.everySecond.subscribe((seconds) => {
      //     var currentTime: moment.Moment = moment();
      //     this.remainingTime = this.searchEndDate.diff(currentTime)
      //     this.remainingTime = this.remainingTime / 1000;
          
      //     if (this.remainingTime <= 0) {
      //     this.SearchDate = moment();
      //     this.searchEndDate = this.SearchDate.add(this.ElapsTime, "minutes");
          
      //     this.TimerExpired.emit();
      //     }
      //     else {
      //     this.minutes = Math.floor(this.remainingTime / 60);
      //     this.seconds = Math.floor(this.remainingTime - this.minutes * 60);
      //             }
      //     this.ref.markForCheck()
      //     })
      // }



  // toTableData(Match:any){
  //   return Object.keys(this.Match).map(d=>{
  //     // let row={}
  //     // row[d] = data[d];
  //     return {key:d, value:this.Match[d]};
  //   })
  // }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  //   }

}
