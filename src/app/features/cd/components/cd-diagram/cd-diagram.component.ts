import { Component, signal, WritableSignal } from '@angular/core';
import {CdDiagramChildComponent} from "../cd-diagram-child/cd-diagram-child.component";

@Component({
  selector: 'cd-diagram',
  standalone: true,
  imports: [ CdDiagramChildComponent ],
  templateUrl: './cd-diagram.component.html'
})
export class CdDiagramComponent {
  public depth: WritableSignal<number> = signal(4);
}
