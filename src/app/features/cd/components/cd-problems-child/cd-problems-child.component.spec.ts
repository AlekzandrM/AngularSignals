import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdProblemsChildComponent } from './cd-problems-child.component';

describe('CdChildComponent', () => {
  let component: CdProblemsChildComponent;
  let fixture: ComponentFixture<CdProblemsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdProblemsChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdProblemsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
