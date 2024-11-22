import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  OutputRef
} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {outputFromObservable, outputToObservable} from "@angular/core/rxjs-interop";
import {Observable} from "rxjs";

@Component({
  selector: 'output-child',
  standalone: true,
  imports: [ MatButton ],
  templateUrl: './output-child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputChildComponent {
  public item: InputSignal<number> = input.required();
  public outputItem: OutputEmitterRef<number> = output<number>();

  constructor() {
    this.outputItem.subscribe((item: number) => console.log('Output subscribe: ', item));
    const toObs: Observable<number> = outputToObservable(this.outputItem);
    const toSig: OutputRef<number> = outputFromObservable(toObs);
  }
}
