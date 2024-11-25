import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'cd-problems-child',
  standalone: true,
  template: `
    <p>
      {{ product.name }} - {{ product.isAvailable ? 'Available' : 'Not available' }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class CdProblemsChildComponent implements OnInit {
  @Input() public product!: { name: string; isAvailable: boolean };
  @Output() public onStatusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  public ngOnInit() {
    this.changeStatus();
  }

  private changeStatus(): void {
    this.product.isAvailable = false;
    this.onStatusChanged.emit(false);
  }
}
