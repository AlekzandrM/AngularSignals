import { Component, inject } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatChip, MatChipSet} from "@angular/material/chips";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatChipSet, MatChip],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Signals';
}
