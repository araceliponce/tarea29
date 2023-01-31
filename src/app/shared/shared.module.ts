import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MaterialModuleModule } from '../material-module/material-module.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MaterialModuleModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
