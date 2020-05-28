import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contato } from '../../acesso/contato.model';
import {MatSnackBar} from '@angular/material';
import { EnvEmail } from '../../servicos/enviarEmail'
import { NgForm } from '@angular/forms'; 


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})

export class ContatoComponent implements OnInit {
  public showContent: boolean = false;
  public formulario: FormGroup = new FormGroup({
    'nome': new FormControl (null, [Validators.required, Validators.minLength(3), Validators.maxLength(55)]),
    'telefone': new FormControl (null),
    'email': new FormControl (null, [Validators.required, Validators.email]),
    'motivo': new FormControl (null, [Validators.required, Validators.minLength(3), Validators.maxLength(55)]),
    'msg': new FormControl (null, [Validators.required, Validators.minLength(1), Validators.maxLength(1000)])
})
constructor(private enviar : EnvEmail, private snackbar: MatSnackBar){}

ngOnInit(){}

public enviarContato():void{
   
    let contact: Contato = new Contato(
      this.formulario.value.nome,
      this.formulario.value.telefone,
      this.formulario.value.email,
      this.formulario.value.motivo,
      this.formulario.value.msg
    )
    this.enviar.sendemail(contact).subscribe((res)=>{});
     this.formulario.reset();
  


  //return this.enviar.sendemail(this.formulario).subscribe(), 
  //this.formulario.reset();
}

onClick(){this.snackbar.open("Enviado com Sucesso!", "Fechar", {duration:5000, verticalPosition: 'top'});}

public mask = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];


}


