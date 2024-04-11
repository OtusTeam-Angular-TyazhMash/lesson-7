import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-after-view-error',
  templateUrl: './after-view-error.component.html',
  styleUrls: ['./after-view-error.component.css'],
})
export class AfterViewErrorComponent implements AfterViewInit {
  public value = 1;

  constructor(/*private zone: NgZone, private ref: ChangeDetectorRef*/) {}

  ngAfterViewInit() {
    this.value = 2;
    /*
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.value = 2;
        this.ref.detectChanges();
      });
    });
    */
  }
}
