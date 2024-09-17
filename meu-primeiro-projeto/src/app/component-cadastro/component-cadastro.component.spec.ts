import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCadastroComponent } from './component-cadastro.component';

describe('ComponentCadastroComponent', () => {
  let component: ComponentCadastroComponent;
  let fixture: ComponentFixture<ComponentCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
