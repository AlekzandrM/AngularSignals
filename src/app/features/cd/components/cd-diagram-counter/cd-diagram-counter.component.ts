import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'cd-diagram-counter',
  standalone: true,
  template: `
    <div class="default-btn">
      <span class="text-green-label">{{ title() }} </span>
      <span class="white-bold-text">{{ count() }} </span>
    </div>
  `,
  styleUrl: './cd-diagram-counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdDiagramCounterComponent {
  public title: InputSignal<string> = input.required<string>();
  public count: InputSignal<number> = input.required<number>();
}
