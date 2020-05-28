import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})

export class Contato {
    constructor (
        public nome: string,
        public telefone: string,
        public email: string,
        public motivo: string,
        public msg: string
    ){};
}