import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ItemComponent } from './pages/item/item.component';
import { AboutComponent } from './pages/about/about.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
{path: '' , component: PortafolioComponent},
{path: 'item/:id' , component: ItemComponent},
{path: 'search/:termino' , component: SearchComponent},
{path: 'about' , component: AboutComponent},
{path: '**' , component: PortafolioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
