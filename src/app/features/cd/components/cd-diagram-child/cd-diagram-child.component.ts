import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  InputSignal,
  NgZone,
  Signal,
  signal,
  viewChild,
  WritableSignal
} from '@angular/core';
import { getId, startAnimations, stopAnimations } from "../../utils/cd.utils";
import {CdDiagramCounterComponent} from "../cd-diagram-counter/cd-diagram-counter.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'cd-diagram-child',
  standalone: true,
  imports: [
    CdDiagramCounterComponent,
    MatButton
  ],
  templateUrl: './cd-diagram-child.component.html',
  styleUrl: './cd-diagram-child.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class CdDiagramChildComponent {
  public depth: InputSignal<number> = input.required<number>();
  public readonly contentNode: Signal<ElementRef<any>> = viewChild.required<ElementRef>('content');

  public cdCountSig: WritableSignal<number> = signal(0);
  public componentId: number = getId();
  public cdCount = 0;
  public intervalId: number | undefined;

  private timeoutTime: number = 0;

  private readonly zone: NgZone = inject(NgZone);


  public triggerCD(): void {
    this.timeoutTime = this.componentId * 200;
    this.zone.runOutsideAngular(() => {
      startAnimations(this.contentNode(), this.timeoutTime);
    });
    this.cdCount++;
    this.reset();
  }

  public incrementCount(): void {
    this.cdCountSig.update((value: number) => value + 1);
  }

  public startInterval(): void {
    // @ts-ignore
    this.intervalId = setInterval(() => {
      this.incrementCount();
    }, 2000);
  }

  public stopInterval(): void {
    clearInterval(Number(this.intervalId));
    this.intervalId = undefined;
  }

  private reset(): void {
    this.zone.runOutsideAngular(() => {
      stopAnimations(this.contentNode(), this.timeoutTime);
    });
  }
}
