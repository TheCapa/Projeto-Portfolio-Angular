import { Component, OnInit } from '@angular/core';
import { Dados } from '../../app.dados'

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  constructor(private dados: Dados) { }

  descP0 = this.dados.fraseProj0;
  imgP0 = this.dados.imgProj0;
  textP0 = this.dados.textoProj0; 
  descP1 = this.dados.fraseProj1;
  imgP1 = this.dados.imgProj1; 
  textP1 = this.dados.textoProj1; 
  descP2 = this.dados.fraseProj2; 
  imgP2 = this.dados.imgProj2; 
  textP2 = this.dados.textoProj2; 
  descP3 = this.dados.fraseProj3;
  imgP3 = this.dados.imgProj3; 
  textP3 = this.dados.textoProj3;

  ngOnInit(){}
}
