import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject} from '@angular/core';
import {CdProblemsChildComponent} from "../cd-problems-child/cd-problems-child.component";

@Component({
  selector: 'cd-problems',
  standalone: true,
  imports: [CdProblemsChildComponent],
  templateUrl: './cd-problems.component.html',
  styleUrl: './cd-problems.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class CdProblemsComponent {
  public products = [
    { name: 'Product1', isAvailable: true },
    { name: 'Product2', isAvailable: true },
    { name: 'Product3', isAvailable: true },
  ];
  public total = 0;

  private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);


  public onStatusChanged(newStatus: boolean) {
    if (!newStatus) {
      this.total++;
      console.log('Total: ', this.total)
    }
  }
}
