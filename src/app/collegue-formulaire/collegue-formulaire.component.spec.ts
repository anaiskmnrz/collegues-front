import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegueFormulaireComponent } from './collegue-formulaire.component';

describe('CollegueFormulaireComponent', () => {
  let component: CollegueFormulaireComponent;
  let fixture: ComponentFixture<CollegueFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegueFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegueFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
