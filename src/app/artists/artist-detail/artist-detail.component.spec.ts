import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { ArtistDetailComponent } from './artist-detail.component';
import { ArtistService } from '../../shared/services/artist.service'
import { SongService }  from '../../shared/services/song.service';

describe('ArtistDetailComponent', () => {
  let component: ArtistDetailComponent;
  let fixture: ComponentFixture<ArtistDetailComponent>;
  let route: ActivatedRoute;
  let artistService: ArtistService;
  let songService: SongService;

  beforeEach(async () => {
    component = new ArtistDetailComponent(route, artistService, songService);

    await TestBed.configureTestingModule({
      declarations: [ ArtistDetailComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [ ArtistService, SongService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
