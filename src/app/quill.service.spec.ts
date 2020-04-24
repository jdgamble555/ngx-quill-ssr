import { TestBed } from '@angular/core/testing';

import { QuillService } from './quill.service';

describe('QuillService', () => {
  let service: QuillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
