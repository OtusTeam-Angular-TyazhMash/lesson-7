import { Component, Input } from '@angular/core';
import { UserInterface } from './user.interface';

@Component({
  selector: 'app-setters-optimization',
  templateUrl: './setters-optimization.component.html',
  styleUrls: ['./setters-optimization.component.css'],
})
export class SettersOptimizationComponent {
  public readonly columns: (keyof UserInterface)[] = ['age', 'name'];
  public data: UserInterface[] = [];

  private _tableData: UserInterface[] = [];
  private _pageIndex = 0;
  private _rows = 10;

  @Input()
  set tableData(data: UserInterface[]) {
    this._tableData = data;
    this.recalculateTable();
  }

  @Input()
  set pageIndex(value: number) {
    this._pageIndex = value;
    this.recalculateTable();
  }

  @Input()
  set rows(value: number) {
    this._rows = value;
    this.recalculateTable();
  }

  recalculateTable(): void {
    this.data = this._tableData.slice(
      this._pageIndex * this._rows,
      (this._pageIndex + 1) * this._rows
    );

    console.log(
      'called recalculate',
      `pageIndex ${this._pageIndex}`,
      `rows ${this._rows}`,
      `dataLength ${this._tableData.length}`
    );
    console.log('new table length', this.data.length);
  }
}
