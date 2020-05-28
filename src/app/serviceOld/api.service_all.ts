import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from 'firebase';
import { Contato } from '../acesso/contato.model';
/*
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};*/
const apiUrl = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUser (): Observable<User[]> {
    return this.http.get<User[]>(apiUrl + "user")
      .pipe(
        catchError(this.handleError('getUser', []))
      );
  }

  newContato (contato : Contato): Observable<Contato>{
    return this.http.post<Contato>(apiUrl + "contato/new",{"nome": contato.nome, "email": contato.email, "motivo": contato.motivo, "msg": contato.msg}
    
    );
    
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}