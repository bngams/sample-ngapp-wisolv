import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './api/api.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    HttpClientModule,
    ApiModule,    
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    ApiModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
