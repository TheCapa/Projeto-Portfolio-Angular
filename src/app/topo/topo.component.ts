import { Component, OnInit } from '@angular/core';
import { Dados } from '../app.dados'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor(private dados: Dados) { }
  logo = this.dados.imgLogo;
  ngOnInit() { }

}
