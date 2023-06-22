import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAdminComponent } from './criar-admin.component';

describe('CriarAdminComponent', () => {
  let component: CriarAdminComponent;
  let fixture: ComponentFixture<CriarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
