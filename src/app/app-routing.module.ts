import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';


const routes: Routes = [
  { path: 'contato', component: ContatoComponent },
  { path: 'certificados', component: CertificadosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
