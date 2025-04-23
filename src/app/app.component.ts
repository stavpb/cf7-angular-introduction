import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Stavroula";

  person = {
    givenName: "Stavroula",
    surName: "Chalvantzi",
    age: 31,
    email: "stavroula.chalvantzi@gmail.com"
  }
}
