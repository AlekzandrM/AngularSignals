import {ChangeDetectionStrategy, Component, model, ModelSignal} from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'model-child',
  standalone: true,
  imports: [ MatButton ],
  template: `
    <div class="mt-4">
      <p class="text-xl">Model-Child {{counterSig()}}</p>
      <div class="flex">
        <button mat-flat-button (click)="increaseCounterSig()" class="mr-4">Increase counter</button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModelChildComponent {

  public counterSig: ModelSignal<number> = model.required<number>( {
    alias: 'counter'
  });

  public increaseCounterSig(): void {
    this.counterSig.update(v => v + 1);
  }
}
