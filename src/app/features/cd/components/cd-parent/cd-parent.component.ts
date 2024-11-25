import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import {CdProblemsChildComponent} from "../cd-problems-child/cd-problems-child.component";
import {NgFor} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatChip, MatChipSet} from "@angular/material/chips";

@Component({
  selector: 'cd-parent',
  standalone: true,
  imports: [ RouterOutlet, MatChip, MatChipSet, RouterLink ],
  templateUrl: './cd-parent.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdParentComponent { }
