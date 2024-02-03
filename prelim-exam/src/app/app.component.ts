import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { JoinComponent } from "./join/join.component";
import { PartnersComponent } from "./partners/partners.component";
import { VenueComponent } from "./venue/venue.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'join', component: JoinComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'venue', component: VenueComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirect to home if no route specified
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, JoinComponent, PartnersComponent, VenueComponent]
})
export class AppComponent {
  title = 'prelim-exam';
}
