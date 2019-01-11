import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnoItemComponent } from './alumno-item/alumno-item.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatFormFieldModule, MatInputModule,
  MatOptionModule, MatSelectModule, MatCardModule } from '@angular/material';
import { AlumnoManagerComponent } from './alumno-manager/alumno-manager.component';
import { AlumnoListaComponent } from './alumno-lista/alumno-lista.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AlumnoEdicionComponent } from './alumno-edicion/alumno-edicion.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoItemComponent,
    MenuComponent,
    AlumnoManagerComponent,
    AlumnoListaComponent,
    SearchBoxComponent,
    AlumnoEdicionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
