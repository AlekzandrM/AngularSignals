import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  contentChildren,
  effect,
  ElementRef,
  Signal
} from '@angular/core';

@Component({
  selector: 'queries-child',
  standalone: true,
  template: `
    <p>queries-child component</p>
    <div>
      <ng-content select=".myClass"/>
      <ng-content/>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueriesChildComponent {
  public subtitle: Signal<ElementRef<unknown>> = contentChild.required(
    'projectedSubTitle', {
    read: ElementRef, descendants: true
  });
  public titles: Signal<readonly Readonly<unknown>[]> = contentChildren(
    'projectedSubTitle', {
    read: ElementRef, descendants: true
  });

  private myEff = effect(() => {
      // console.log('contentChild: ', this.subtitle(), 'contentChildren: ', this.titles())
  })
}
