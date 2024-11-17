import {
  Component,
  computed,
  effect, EffectCleanupRegisterFn,
  EffectRef,
  inject,
  Inject,
  Injector, OnInit, runInInjectionContext,
  Signal,
  signal, untracked,
  WritableSignal
} from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'effect',
  standalone: true,
  imports: [ MatButton ],
  templateUrl: './effect.component.html',
  providers: [
    {
      provide: 'SOME_TOKEN',
      useFactory: () => {
        effect(() => console.log('Factory Log: ' ));
        return 'Some Value';
      }
    }
  ]
})
export class EffectComponent implements OnInit {
  public name: WritableSignal<string> = signal('John');
  public upperCaseName: Signal<string> = computed(() => this.name().toUpperCase());

  public effectRef: EffectRef = effect((onCleanup: EffectCleanupRegisterFn) => {
      console.log('Property Log: ' + this.name());
      onCleanup(() => console.log('Cleanup Log: ' + this.name()));
    },
    {
      manualCleanup: true,
      allowSignalWrites: true
    }
  );

  counter1 = signal(1);
  counter2 = signal(2);
  computedCount = computed(
    () => this.counter1() + this.counter2()
  );

  private readonly injector: Injector = inject(Injector);


  constructor(@Inject('SOME_TOKEN') private someValue: string) {
    effect(() => console.log('Constructor Log: ' + this.name() + ' -> ' + this.upperCaseName()));

    effect(() =>
      console.log(`Total: ${this.counter1() + this.counter2()}`, untracked(() => this.counter1()))
    )
  }

  public ngOnInit(): void {
    runInInjectionContext(this.injector, () =>
      effect(() =>
        console.log('OnInit Log: ' + this.name() + ' -> ' + this.upperCaseName())
      ));
  }

  public setName(): void {
    this.name.set('Jane');
  }

  public clean(): void {
    this.name.set('Maks');
    this.effectRef?.destroy();
  }

  public incrementOne() {
    this.counter1.update(v => v + 1);
  }

  public incrementTwo() {
    this.counter2.update(v => v + 1);
  }
}


