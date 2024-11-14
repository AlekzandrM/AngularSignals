import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'cd-problems-child',
  standalone: true,
  imports: [],
  templateUrl: './cd-problems-child.component.html',
  styleUrl: './cd-problems-child.component.scss'
})
export class CdProblemsChildComponent implements OnInit, AfterViewInit {
  @Input() public product!: { name: string; isAvailable: boolean };
  @Output() public statusChanged = new EventEmitter<boolean>();

  public testValue = 'Child';

  private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);


  public ngOnInit() {
    setTimeout(() => this.changeStatus());
    // this.changeStatus();
  }

  public ngAfterViewInit() {
    this.testValue = 'Child2'
  }

  private changeStatus(): void {
    this.product.isAvailable = false;
    this.statusChanged.emit(false);
    this.testValue = 'Child2';
    this.cdr.detectChanges();
  }
}
