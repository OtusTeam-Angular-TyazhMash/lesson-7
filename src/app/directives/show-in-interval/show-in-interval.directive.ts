import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { interval, map, Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[show-in-interval]',
})
export class ShowInIntervalDirective implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly vcr: ViewContainerRef,
    private readonly templateREf: TemplateRef<any>
  ) {}

  @Input('show-in-interval')
  public interval = 1000;

  public ngOnInit(): void {
    interval(this.interval)
      .pipe(
        map((i) => i % 2 === 0),
        takeUntil(this.destroy$)
      )
      .subscribe((condition) => (condition ? this.show() : this.hide()));
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private show(): void {
    this.vcr.createEmbeddedView(this.templateREf);
  }

  private hide(): void {
    this.vcr.clear();
  }
}
