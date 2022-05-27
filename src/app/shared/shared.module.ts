import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { FilterComponent } from './components/filter/filter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { PagesPipe } from './pipes/pages.pipe';



@NgModule({
  declarations: [
    FilterComponent,
    FormComponent,
    FilterPipe,
    PagesPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FilterComponent,
    FormComponent,
    FilterPipe,
    PagesPipe
  ]
})
export class SharedModule { }
