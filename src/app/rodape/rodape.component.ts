import { Component, OnInit } from '@angular/core';
import { Dados } from '../app.dados'

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  constructor(private dados: Dados){}
  titulo = this.dados.nomeRodape;

  ngOnInit(){}
}
