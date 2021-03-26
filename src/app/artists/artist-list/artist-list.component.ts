import { Component, OnInit } from '@angular/core';
import { Artist } from '../../shared/models/artist.model';
import { ArtistService } from '../../shared/services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  searchText;
  artists: Artist[];

  constructor(private artistService: ArtistService) { 
    this.searchText = '';
    this.artists = [];
  }

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists(): void {
    this.artistService.getArtists()
      .subscribe(artists => this.artists = artists)
  }
}
