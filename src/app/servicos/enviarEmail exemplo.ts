import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';;
import { Contato } from '../acesso/contato.model';
import { Observable } from 'rxjs';

const apiUrl = 'API gerada pelo firebase /sendMail';
@Injectable({
  providedIn: 'root'
})
export class EnvEmail {
  constructor(private http: HttpClient){}

  sendemail (contato : Contato): Observable<Contato>{
      //console.log("foi carai");
      return this.http.post<Contato>(apiUrl,{"nome": contato.nome, "telefone": contato.telefone, "email": contato.email, "motivo": contato.motivo, "msg": contato.msg},{});
  }
}