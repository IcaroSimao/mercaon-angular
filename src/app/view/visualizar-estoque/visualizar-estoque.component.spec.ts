import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarEstoqueComponent } from './visualizar-estoque.component';

describe('VisualizarEstoqueComponent', () => {
  let component: VisualizarEstoqueComponent;
  let fixture: ComponentFixture<VisualizarEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarEstoqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
