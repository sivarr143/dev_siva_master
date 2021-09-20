import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { SelectedValuesService } from '../services/selected-values.service';
import { TesthelloworldServiceService } from '../services/testhelloworld-service.service';

@Component({
  selector: 'app-content-headder',
  templateUrl: './content-headder.component.html',
  styleUrls: ['./content-headder.component.css']
})
export class ContentHeadderComponent implements OnInit {

  constructor(private sel : SelectedValuesService, private matchService : MatchService) { }

  ngOnInit(): void {
  }

  table(){
    
    if(this.sel.menuoptions !== undefined && this.sel.season !== undefined){
      this.sel.contentselect = 'table';
    }

    else{
      alert("menu option or season selection is not selected");
    }
  }

  chart(){
    if(this.sel.menuoptions !== undefined &&this.sel.season !== undefined){
      this.sel.contentselect = 'chart';
    }
    else{
      alert("menu option or season selection is not selected");
    }
  }
}
