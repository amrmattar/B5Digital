import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-and-order',
  templateUrl: './search-and-order.component.html',
  styleUrls: ['./search-and-order.component.scss'],
})
export class SearchAndOrderComponent implements OnInit {
  dropDownFlag: boolean;
  catagory: string = 'All Categories';

  constructor() {}

  ngOnInit(): void {}

  toggleDropDown(data) {
    this.catagory = data;
    this.dropDownFlag = !this.dropDownFlag;
  }
}
