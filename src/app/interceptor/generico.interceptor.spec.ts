import { TestBed } from '@angular/core/testing';

import { GenericoInterceptor } from './generico.interceptor';

describe('GenericoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GenericoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GenericoInterceptor = TestBed.inject(GenericoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
