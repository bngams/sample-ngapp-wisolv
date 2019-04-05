import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    HttpClientModule,
    ApiModule
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    ApiModule
  ]
})
export class SharedModule { }
