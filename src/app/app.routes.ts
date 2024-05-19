import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './pages/movies/movies/movies.component';


export const routes: Routes = [
{'path' : '', component:HomeComponent},
{'path':  'movies', component:MoviesComponent},
{'path': 'sandbox', component:SandboxComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
