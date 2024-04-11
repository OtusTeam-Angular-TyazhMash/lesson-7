import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
} from '@angular/core';
const STORAGE_KEY = 'tempInput';

@Component({
  selector: 'app-life-cycles',
  templateUrl: './life-cycles.component.html',
  styleUrls: ['./life-cycles.component.css'],
})
export class LifeCyclesComponent {
  public inputValue = '';
  constructor() {}

  private getLastValue(): string | null {
    return localStorage.getItem(STORAGE_KEY);
  }

  private setTempValue(value: string): void {
    localStorage.setItem(STORAGE_KEY, value);
  }

  public onChangeInput(): void {
    this.setTempValue(this.inputValue);
  }
}
