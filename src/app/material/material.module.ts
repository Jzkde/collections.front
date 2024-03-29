import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';





@NgModule({
  declarations: [],
  exports: [
    MatCardModule,
    TooltipModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSlideToggleModule
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ]
})
export class MaterialModule { }
