import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioComponentComponent } from './usuario-component.component';

describe('UsuarioComponentComponent', () => {
  let component: UsuarioComponentComponent;
  let fixture: ComponentFixture<UsuarioComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioComponentComponent]
    });
    fixture = TestBed.createComponent(UsuarioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
