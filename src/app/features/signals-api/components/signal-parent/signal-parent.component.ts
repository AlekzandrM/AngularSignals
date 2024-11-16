import { Component } from '@angular/core';
import {MatChip, MatChipSet} from "@angular/material/chips";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'signal-parent',
  standalone: true,
  imports: [
    MatChip,
    MatChipSet,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './signal-parent.component.html'
})
export class SignalParentComponent { }
