import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject} from '@angular/core';
import {CdProblemsChildComponent} from "../cd-problems-child/cd-problems-child.component";

@Component({
  selector: 'cd-problems',
  standalone: true,
  imports: [CdProblemsChildComponent],
  template: `
    <h3 class="pt-5">Unidirectional data flow problem</h3>
    @for (product of products; track product.name) {
      <cd-problems-child
        [product]="product"
        (onStatusChanged)="onStatusChanged($event)"/>
    }
    <p class="text-red-400 font-bold">Total: {{ total }}</p>
  `,
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
