import { Component, OnInit } from '@angular/core';
import { Dados } from '../../app.dados'

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})

export class SobreComponent implements OnInit {
  constructor(private dados: Dados) { }

  subFrase = this.dados.fraseSobre;
  sobreP0 = this.dados.textoSobreP0;
  sobreP1 = this.dados.textoSobreP1;
  sobreP2 = this.dados.textoSobreP2;
  sobreP3 = this.dados.textoSobreP3;
  sobreP4 = this.dados.textoSobreP4;
  sobreP5 = this.dados.textoSobreP5;
  quemSou = this.dados.tituloSobre;
  img = this.dados.imgSobre;

  ngOnInit(){}
}
