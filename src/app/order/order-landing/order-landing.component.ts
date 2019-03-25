import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/MenuItem';

@Component({
  selector: 'app-order-landing',
  templateUrl: './order-landing.component.html',
  styleUrls: ['./order-landing.component.sass']
})
export class OrderLandingComponent implements OnInit {

  constructor() { }
  items: MenuItem[];
  ngOnInit() {
    this.items = [
      {label: 'Choose Plan'},
      {label: 'Customize'},
      {label: 'Customer Details'},
      {label: 'Review'}
  ];
  }

}
