
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { ContactService } from '../../../components/contact/contact.service';
import { Contact } from '../../../components/contact/contact.model';

@Component({
  standalone: true,
  selector: 'app-contato.portuguese',
  templateUrl: './contato.portuguese.component.html',
  styleUrl: './contato.portuguese.component.scss',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
  ]
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
    private router: Router
  ) { }

  ngOnInit(): void {
  }


}
