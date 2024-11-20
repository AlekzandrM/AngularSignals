import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Input,
  input,
  InputSignal,
  InputSignalWithTransform,
  OnChanges,
  Signal, SimpleChanges
} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {isEvenNumber} from "../../utils/new-api.utils";

@Component({
  selector: 'input-child',
  standalone: true,
  imports: [ MatButton ],
  templateUrl: './input-child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputChildComponent implements OnChanges {
  public counterSig: InputSignal<number> = input.required<number>();
  public isEvenSig: Signal<boolean> =
    computed(() => this.counterSig() % 2 === 0);

  // Using transform method
  public isEven2Sig: InputSignalWithTransform<boolean, number> =
    input.required<boolean, number>({
      alias: 'counterWithTransformSig',
      transform: isEvenNumber
  });

  // First @Input() option:
  public isEven: boolean | undefined = undefined;
  @Input() public counter!: number;
  public ngOnChanges(changes: SimpleChanges) {
    if (changes['counter']) {
      this.isEven = changes['counter'].currentValue % 2 === 0;
    }
  }
  // Second @Input() option:
  // @Input({required: true}) set counter (counterValue: number) {
  //   this.isEven = counterValue % 2 === 0;
  // }
}
