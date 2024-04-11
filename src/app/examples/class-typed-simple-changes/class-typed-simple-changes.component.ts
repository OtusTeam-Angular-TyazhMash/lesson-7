import { Component, Input, OnChanges } from '@angular/core';

type FunctionProperties<T> = {
  [Key in keyof T]: T[Key] extends Function ? never : Key;
};

type ExcludeFunctions<T> = Pick<T, FunctionProperties<T>[keyof T]>;

type NgChanges<T, Props = ExcludeFunctions<T>> = {
  [Key in keyof Props]: {
    previousValue: Props[Key];
    currentValue: Props[Key];
    firstChange: boolean;
    isFirstChange(): boolean;
  };
};

@Component({
  selector: 'app-class-typed-simple-changes',
  templateUrl: './class-typed-simple-changes.component.html',
  styleUrls: ['./class-typed-simple-changes.component.css'],
})
export class ClassTypedSimpleChangesComponent implements OnChanges {
  @Input()
  value: number | undefined;

  constructor() {}

  ngOnChanges(changes: NgChanges<ClassTypedSimpleChangesComponent>): void {
    console.log('class typed simple changes', changes.value.currentValue);
  }
}
