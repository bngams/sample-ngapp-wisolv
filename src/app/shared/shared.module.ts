import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './api/api.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    HttpClientModule,
    ApiModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    ApiModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
