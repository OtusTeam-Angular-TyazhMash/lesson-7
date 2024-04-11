import { Component, Input } from '@angular/core';

interface TypedProperties {
  value: number;
}

interface TypedSimpleChange<T> {
  currentValue: T;
  previousValue: T;
  firstChange: boolean;
}

type TypedSimpleChanges<T> = {
  [key in keyof T]: TypedSimpleChange<T[key]>;
};

@Component({
  selector: 'app-typed-simple-changes',
  templateUrl: './typed-simple-changes.component.html',
  styleUrls: ['./typed-simple-changes.component.css'],
})
export class TypedSimpleChangesComponent implements TypedProperties {
  @Input()
  value: number = 1;

  constructor() {}

  ngOnChanges(changes: TypedSimpleChanges<TypedProperties>): void {
    changes.value.currentValue
  }
}
