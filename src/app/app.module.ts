import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SettersOptimizationComponent } from './examples/setters-optimization/setters-optimization.component';
import { AfterViewErrorComponent } from './examples/after-view-error/after-view-error.component';
import { TypedSimpleChangesComponent } from './examples/typed-simple-changes/typed-simple-changes.component';
import { ShowInIntervalDirective } from './directives/show-in-interval/show-in-interval.directive';
import { LifeCyclesComponent } from './students/life-cycles/life-cycles.component';
import { FormsModule } from '@angular/forms';
import { ClassTypedSimpleChangesComponent } from './examples/class-typed-simple-changes/class-typed-simple-changes.component';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    SettersOptimizationComponent,
    AfterViewErrorComponent,
    TypedSimpleChangesComponent,
    ClassTypedSimpleChangesComponent,
    ShowInIntervalDirective,
    LifeCyclesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
