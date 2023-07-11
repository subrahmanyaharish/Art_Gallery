import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatArtCardComponent } from './mat-art-card.component';

describe('MatArtCardComponent', () => {
  let component: MatArtCardComponent;
  let fixture: ComponentFixture<MatArtCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatArtCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatArtCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
