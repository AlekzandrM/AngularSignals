import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  Signal,
  viewChild, viewChildren,
  ViewContainerRef
} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {QueriesChildComponent} from "../queries-child/queries-child.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'queries',
  standalone: true,
  imports: [MatButton, QueriesChildComponent, NgIf],
  templateUrl: './queries.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueriesComponent {
  public title: Signal<ElementRef> = viewChild.required('title');
  public subtitle: Signal<ViewContainerRef | undefined> = viewChild('title', { read: ViewContainerRef });

  private queryChildren: Signal<readonly ElementRef<unknown>[]>
    = viewChildren(QueriesChildComponent, { read: ElementRef });

  private myEff = effect(() =>
    console.log('title: ', this.title()?.nativeElement, this.subtitle(), this.queryChildren()));

  public logClick(num: number): void {
    console.log(`${num} button clicked`);
  }
}
