import {ChangeDetectionStrategy, Component, signal, WritableSignal} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {OutputChildComponent} from "../output-child/output-child.component";

@Component({
  selector: 'output',
  standalone: true,
  imports: [ MatButton, OutputChildComponent ],
  templateUrl: './output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputComponent {
  public outputItem: WritableSignal<number | null> = signal(null);
}
