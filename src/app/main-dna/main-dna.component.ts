import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main-dna',
  templateUrl: './main-dna.component.html',
  styleUrls: ['./main-dna.component.css']
})
export class MainDNAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }


}
