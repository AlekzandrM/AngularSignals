import {Component, computed, Signal, signal, WritableSignal} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {BehaviorSubject, combineLatest, map, Subject, tap} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'computed',
  standalone: true,
  imports: [MatButton, AsyncPipe],
  templateUrl: './computed.component.html'
})
export class ComputedComponent {
  public counter: WritableSignal<number> = signal(1);
  public doubleCounter: Signal<number> = computed(() => this.counter() * 2);

  private value1$ = new BehaviorSubject('Value 1: initial');
  private value2$ = new BehaviorSubject('Value 2: initial');
  public combined$ = combineLatest(    [this.value1$, this.value2$]).pipe(
    tap(([value1, value2]) => console.log(`${value1} / ${value2}`)),
    map(([value1, value2]) => `${value1} / ${value2}`)
  );

  public update(): void {
    this.value1$.next('Value 1: updated');
    this.value2$.next('Value 2: updated');
  }


  constructor() {
    const counter = signal(1);
    const doubleCount = computed(() => {
      console.log('Computation')
      return counter() * 2
    });
    console.log(doubleCount());
    counter.set(2);
    console.log(doubleCount());
    counter.set(2);
    console.log(doubleCount());
  }

  public increment(): void {
    this.counter.update(v => v + 1);
  }

  public decrement(): void {
    this.counter.update(v => v - 1);
  }

  // public update(): void {
  //   this.value1$.next('Value 1: updated');
  //   this.value2$.next('Value 2: updated');
  // }
}
