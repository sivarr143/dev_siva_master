import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './content/chart/bar/bar.component';
import { ChartComponent } from './content/chart/chart.component';
import { PieComponent } from './content/chart/pie/pie.component';
import { ContentComponent } from './content/content.component';
import { TableComponent } from './content/table/table.component';

const routes: Routes = [
  { path: 'content', component: ContentComponent },
  { path: 'table', component: TableComponent },
  { path: 'chart', component: ChartComponent },
  {path: 'bar', component: BarComponent},
  {path: 'pie', component: PieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
