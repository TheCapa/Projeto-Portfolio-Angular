import { Component, OnInit, VERSION } from '@angular/core';
import { Dados } from '../../app.dados'

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {
  constructor(private dados: Dados){}

  descC0 = this.dados.fraseCert0;  
  descC1 = this.dados.fraseCert1;  
  descC2 = this.dados.fraseCert2;  
  descC3 = this.dados.fraseCert3;  
  descC4 = this.dados.fraseCert4;  
  descC5 = this.dados.fraseCert5; 
  descC6 = this.dados.fraseCert6;
  c0 = this.dados.imgCert0; 
  c1 = this.dados.imgCert1;  
  c2 = this.dados.imgCert2;  
  c3 = this.dados.imgCert3;  
  c4 = this.dados.imgCert4;  
  c5 = this.dados.imgCert5; 
  c6 = this.dados.imgCert6;
  
  ngOnInit(){}

//valida: boolean = true;
//form: boolean = false;

/*toggleShow(){
  this.form = ! this.form;
  this.valida = ! this.valida;
}*/
}


