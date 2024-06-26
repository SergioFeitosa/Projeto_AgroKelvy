import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Contact } from './contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  baseUrl = "http://localhost:3000/contacts"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(contact: Contact): Observable<Contact>  {
    return this.http.post<Contact>(this.baseUrl,contact)
  }

}

