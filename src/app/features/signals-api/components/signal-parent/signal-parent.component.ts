import { Component } from '@angular/core';
import {MatChip, MatChipSet} from "@angular/material/chips";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'signal-parent',
  standalone: true,
  imports: [ MatChip, MatChipSet, RouterLink, RouterOutlet ],
  template: `
    <div class="w-full max-w-1200 mx-auto">
      <mat-chip-set>
        <mat-chip routerLink="signal">Signal</mat-chip>
        <mat-chip routerLink="computed">Computed</mat-chip>
        <mat-chip routerLink="effect">Effect</mat-chip>
      </mat-chip-set>

      <router-outlet/>
    </div>
  `
})
export class SignalParentComponent { }
