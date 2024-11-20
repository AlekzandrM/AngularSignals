import {
  ChangeDetectionStrategy,
  Component,
  effect,
  EffectRef,
  model,
  ModelSignal,
  signal,
  WritableSignal
} from '@angular/core';
import {InputChildComponent} from "../input-child/input-child.component";
import {MatButton} from "@angular/material/button";
import {ModelChildComponent} from "../model-child/model-child.component";

@Component({
  selector: 'model',
  standalone: true,
  imports: [ InputChildComponent, MatButton, ModelChildComponent ],
  templateUrl: './model.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModelComponent {
  public counterSig: WritableSignal<number> = signal<number>(2);

  public id: ModelSignal<string> = model.required<string>();
  queryParamEffect: EffectRef = effect(() => console.log('queryId: ', this.id()));
}
