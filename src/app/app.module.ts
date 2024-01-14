import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ElementoComponent } from './elemento/elemento.component';
import { NuevoComponent } from './elemento/formularios/nuevo/nuevo.component';
import { EditarComponent } from './elemento/formularios/editar/editar.component';
import { UnoComponent } from './elemento/uno/uno.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementoComponent,
    NuevoComponent,
    EditarComponent,
    UnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
