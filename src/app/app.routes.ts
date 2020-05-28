import { Routes} from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import { SobreComponent} from './pages/sobre/sobre.component';
import { ProjetosComponent} from './pages/projetos/projetos.component';
import { CertificadosComponent} from './pages/certificados/certificados.component';
import { ContatoComponent} from './pages/contato/contato.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent},
    { path: 'projetos', component: ProjetosComponent},
    { path: 'certificados', component: CertificadosComponent},
    { path: 'contato', component: ContatoComponent}
]
