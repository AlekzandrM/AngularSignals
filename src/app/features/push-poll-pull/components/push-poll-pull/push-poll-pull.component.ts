import {Component, computed, effect, signal} from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'push-poll-pull',
  standalone: true,
  imports: [ MatButton ],
  templateUrl: './push-poll-pull.component.html'
})
export class PushPollPullComponent {
  // Fist
  public s1 = signal(0);
  public c1 = computed(() => {
    console.log('c1');
    return this.s1() + 1;
  });
  public c2 = computed(() => {
    console.log('c2');
    return `computed2 = ${this.c1() + 1}`;
  });
  public incrementS1(): void {
    this.s1.update((v) => v + 1);
  }

  // Second
  public s2 = signal(0);
  public c3 = computed(() => {
    console.log('c3');
    return this.s2() > 5;
  });
  public c4 = computed(() => {
    console.log('c4');
    return `computed4, is bigger then 5: ${this.c3()}`;
  });
  public incrementS2(): void {
    this.s2.update((v) => v + 1);
  }

  // Third
  public logS3 = true;
  public s3 = signal(0);
  public s4 = signal(0)
  public c5 = computed(() =>
    this.logS3 ? this.s3() : this.s4()
  );
  public incrementS3() {
    this.s3.update((v) => v + 1);
  }
  public incrementS4() {
    this.s4.update((v) => v + 1);
  }

  // Fourth
  constructor() {
    const counter = signal(0);
    effect(() => console.log('Log Effect counter: ', counter()));
    counter.set(1);
    counter.set(2);
    counter.update((current) => current + 1);
    counter.update((current) => current + 1);
  }
}
