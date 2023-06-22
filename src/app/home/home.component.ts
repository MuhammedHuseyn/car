import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name = 'Angular 5';
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
}
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Smith.', weight: 1.0079, symbol: 'Man'},
  {position: 2, name: 'Johnson.', weight: 4.0026, symbol: 'Man'},
  {position: 3, name: 'Williams', weight: 6.941, symbol: 'Man'},
  {position: 4, name: 'Brown', weight: 9.0122, symbol: 'WoMan'},
  {position: 5, name: 'Jones', weight: 10.811, symbol: 'Man'},
  {position: 6, name: 'Garcia', weight: 12.0107, symbol: 'WoMan'},
  {position: 7, name: 'Miller', weight: 14.0067, symbol: 'WoMan'},
  {position: 8, name: 'Davis', weight: 15.9994, symbol: 'WoMan'},
  {position: 9, name: 'Martinez', weight: 18.9984, symbol: 'WoMan'},
  {position: 10, name: 'Rodriguez', weight: 20.1797, symbol: 'Man'},
];