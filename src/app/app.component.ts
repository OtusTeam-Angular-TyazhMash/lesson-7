import { Component, OnInit } from '@angular/core';
import { createMockTableData } from './examples/setters-optimization/data.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public readonly tableData = createMockTableData(300);
  constructor() {}

  ngOnInit() {}
}
