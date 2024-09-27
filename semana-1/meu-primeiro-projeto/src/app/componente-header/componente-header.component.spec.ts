import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHeaderComponent } from './componente-header.component';

describe('ComponenteHeaderComponent', () => {
  let component: ComponenteHeaderComponent;
  let fixture: ComponentFixture<ComponenteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
