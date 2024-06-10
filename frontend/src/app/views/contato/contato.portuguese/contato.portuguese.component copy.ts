import { ContactService } from './../../../components/contact/contact.service';

import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { Contact } from '../../../components/contact/contact.model';
import { FormsModule } from '@angular/forms';
import { ContactCreateComponent } from '../../../components/contact/contact-create/contact-create.component';

@Component({
  standalone:true,
  selector: 'app-contato.portuguese',
  templateUrl: './contato.portuguese.component.html',
  styleUrl: './contato.portuguese.component.scss',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ContactCreateComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ContatoPortugueseComponent implements OnInit {

  contact: Contact = {
    name: 'Edson',
    email: 'edson@teste.com',
    subject: 'Cotação de serviço',
    message: 'Boa tarde!!! Gostaria de cotar 25000M de sorgo forragem',
    status: '1'

  }

  constructor(
    private contactService: ContactService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
  
    this.router.navigate(['contato/portuguese'])
  } 

  createContact(): void {
    this.contactService.create(this.contact).subscribe(() => {
      this.contactService.showMessage('Contato Criado!!')
      this.router.navigate(['contato/portuguese'])
    })
  }   
}
