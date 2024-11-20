import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatChip, MatChipSet} from "@angular/material/chips";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'new-api-parent',
  standalone: true,
  imports: [ MatChip, MatChipSet, RouterLink, RouterOutlet ],
  templateUrl: './new-api-parent.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewApiParentComponent { }
