import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Artist } from '../../shared/models/artist.model';
import { ArtistService } from '../../shared/services/artist.service'
import { Song } from '../../shared/models/song.model';
import { SongService }  from '../../shared/services/song.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})

export class ArtistDetailComponent implements OnInit {

  private artistId: string|null = null;
  artist: Artist|null = null;
  @Input() songs: Song[] = [];

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService,
    private songService: SongService
  ) {}

  ngOnInit(): void {
    this.artistId = this.route.snapshot.paramMap.get('id');
    this.getSongs();
  }

  async getSongs(): Promise<void> {
    if(this.artistId) {
      this.artist = await this.artistService.getArtist(+this.artistId).toPromise();
    }
    if(this.artist) {
      this.songService.getSongsForArtist(this.artist.name)
      .subscribe(songs => this.songs = songs);
    }
  }

}
