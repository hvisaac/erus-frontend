import { Component, OnInit, ViewChild } from '@angular/core';
import { StatsService } from '../services/stats.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MutationsDna } from '../interfaces/mutations-dna';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['date', 'dna', 'hasmutation'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<MutationsDna>;

  dnas: [MutationsDna]  =  [{
    date: "",
    dna: [""],
    hasMutation: false,
  }];

  constructor(private StatsService: StatsService) { 
  }

  ngOnInit(): void {
    this.StatsService.getList().subscribe(data => {
      this.dnas = data;
      this.dataSource = new MatTableDataSource<MutationsDna>(this.dnas);
      this.dataSource.paginator = this.paginator;
      console.log(data);
    })
  }

}
