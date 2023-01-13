import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],

  //En los imputs solo módulos
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
