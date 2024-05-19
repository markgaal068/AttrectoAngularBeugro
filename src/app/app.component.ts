import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './pages/movies/movies/movies.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, SandboxComponent, NavbarComponent, RouterLink, HomeComponent, MoviesComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  title = 'internship-angular-test-2024';

  //Második feladat
  onButtonClick(): void {
    console.log('Gomb klikkelve!');
  }
}


