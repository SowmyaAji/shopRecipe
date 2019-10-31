import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shopRecipe';
  displayChoice = 'recipe'

  onNavigate(choice: string) {
    this.displayChoice = choice;
  }
}
