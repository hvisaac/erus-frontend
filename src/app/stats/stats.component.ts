import { Component, OnInit } from '@angular/core';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  ratioChart: any[];
  cardColor: string = '#232837';

  single: any[];
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  count_mutations: number;
  count_no_mutations: number;
  ratio: number; 

  constructor(
    private StatsService : StatsService
  ) {
  }

  ngOnInit(): void {
    this.StatsService.getStats().subscribe(data => {
      console.log(data);
      this.count_mutations    = data.count_mutations;
      this.count_no_mutations = data.count_no_mutations;
      this.ratio              = data.ratio;

      this.single = [
        {
          "name": "Mutations",
          "value": this.count_mutations
        },
        {
          "name": "No Mutations",
          "value": this.count_no_mutations
        }
      ]

      this.ratioChart = [
        {
          "name": "Ratio",
          "value": this.ratio
        }
      ]
    })
  }

}
