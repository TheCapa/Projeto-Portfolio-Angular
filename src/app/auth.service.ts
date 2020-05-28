import { Component } from '@angular/core';
import { Contato } from './acesso/contato.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

@Component({
    template: ("./app.component.html"),
    providers: [AuthService]
})

export class AuthService {

  constructor(private db: AngularFireDatabase) { };


  insert(contact: Contato) {
    this.db.list('contato').push(contact)
      .then((result: any) => {
        console.log(result.key);
      });
  }





  public ContatoUsuario(contact : Contato): void{
    //console.log("Chegamos", contact)
return this.insert(contact);

    



}
}