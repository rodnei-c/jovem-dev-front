import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentListagemComponent } from './component-listagem.component';

describe('ComponentListagemComponent', () => {
  let component: ComponentListagemComponent;
  let fixture: ComponentFixture<ComponentListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentListagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
