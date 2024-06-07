import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgModule } from '@angular/core';

import { ContactCrudComponent } from './components/contact/contact-crud/contact-crud.component';
import { ContactCreateComponent } from './components/contact/contact-create/contact-create.component';
import { ContatoPortugueseComponent } from './views/contato/contato.portuguese/contato.portuguese.component';


@NgModule({
    declarations: [
      ],
  imports:      
  [ 
    BrowserModule, 
    ContactCreateComponent,
    ContactCrudComponent,
    ContatoPortugueseComponent,
    FormsModule,
    HttpClientModule,

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatSnackBarModule
],

providers: [],
})
export class AppModule { }