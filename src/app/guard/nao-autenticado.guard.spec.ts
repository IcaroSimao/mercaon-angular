import { TestBed } from '@angular/core/testing';

import { NaoAutenticadoGuard } from './nao-autenticado.guard';

describe('NaoAutenticadoGuard', () => {
  let guard: NaoAutenticadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NaoAutenticadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
