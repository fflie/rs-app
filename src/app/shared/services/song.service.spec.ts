import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SongService } from './song.service';

describe('SongService', () => {
  let service: SongService;
  let serviceSpy: jasmine.SpyObj<SongService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('SongService', ['getValue']);

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ], 
      providers: [
        SongService,
        { provide: SongService, useValue: spy }
      ]
    });
    service = TestBed.inject(SongService);
  });

  it('should be created', () => {
    serviceSpy = TestBed.inject(SongService) as jasmine.SpyObj<SongService>;
    expect(service).toBeTruthy();
  });
});
