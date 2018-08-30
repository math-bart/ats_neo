import { NgModule } from '@angular/core';

import {
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatProgressBarModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ],
})
export class MaterialModule { }
