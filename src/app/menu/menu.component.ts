import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { SelectedValuesService } from '../services/selected-values.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  selected = '';
  menulist: string[]=['matchList','topScorers','topBowlers'];

  constructor(private sel : SelectedValuesService, private matchService : MatchService) { }

  ngOnInit(): void {
    this.sel.season='2020';
    this.sel.menuoptions='matchList';
    this.sel.contentselect='table';
    
  }

  onchange($event : any){
    if(this.sel.season !== undefined)
    {
      this.sel.menuoptions = $event.source._value[0];
      console.log(this.sel.menuoptions);

      if(this.sel.menuoptions === 'matchList')
      {
        this.matchService.getMatchlist().subscribe(res => this.sel.data=res);
      }
      else
      {
        this.matchService.getTopScorers().subscribe(res => this.sel.data=res);
        
      }
      
    }
    else
    {
      alert("Please select a season first");
    }
  }

}
