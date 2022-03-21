import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MainDNAComponent } from './main-dna/main-dna.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: 'stats', component: StatsComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
