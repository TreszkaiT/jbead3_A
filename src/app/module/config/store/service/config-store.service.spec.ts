import { TestBed } from '@angular/core/testing';

import { ConfigStoreServiceImpl } from './config-store.service.Impl';

describe('ConfigStoreService', () => {
  let service: ConfigStoreServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigStoreServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
