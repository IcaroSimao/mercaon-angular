import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarVendaComponent } from './visualizar-venda.component';

describe('VisualizarVendaComponent', () => {
  let component: VisualizarVendaComponent;
  let fixture: ComponentFixture<VisualizarVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarVendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
