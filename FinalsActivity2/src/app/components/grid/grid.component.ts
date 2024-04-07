import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  favoriteMarvel: string = '';
  Marvels: string[] = ['Thor', 'Ironman', 'Captain America', 'Hawkeye'];

  constructor(private snackBar: MatSnackBar) { }

  showSnackbar() {
    if (this.favoriteMarvel) {
      this.snackBar.open(`Your favorite Marvel is ${this.favoriteMarvel}`, 'Close', {
        duration: 3000, // Duration in milliseconds
        panelClass: ['snackbar-background']
      });
    }
  }
}