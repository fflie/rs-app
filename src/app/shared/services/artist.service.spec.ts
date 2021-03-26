import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArtistService } from './artist.service';

describe('ArtistService', () => {
  let service: ArtistService;
  let serviceSpy: jasmine.SpyObj<ArtistService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ArtistService', ['getValue']);

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ], 
      providers: [
        ArtistService,
        { provide: ArtistService, useValue: spy }
      ]
    });
    service = TestBed.inject(ArtistService);
  });

  it('should be created', () => {
    serviceSpy = TestBed.inject(ArtistService) as jasmine.SpyObj<ArtistService>;
    expect(service).toBeTruthy();
  });
});
