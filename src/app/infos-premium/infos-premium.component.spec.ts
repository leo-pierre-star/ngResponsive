import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosPremiumComponent } from './infos-premium.component';

describe('InfosPremiumComponent', () => {
  let component: InfosPremiumComponent;
  let fixture: ComponentFixture<InfosPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
