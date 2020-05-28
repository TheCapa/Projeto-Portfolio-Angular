import { Component, OnInit } from '@angular/core';
import { Dados } from '../../app.dados'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private dados: Dados) {}
    
img = this.dados.imgHome;
frase = this.dados.fraseHome;
title = this.dados.tituloHome;
  
  ngOnInit(){}
}
