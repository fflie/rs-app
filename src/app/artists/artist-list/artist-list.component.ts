import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  searchText = '';
  artists = [
    { id: 11, name: 'Mr. Nice'},
    { id: 12, name: 'Narco'},
    { id: 13, name: 'Bombasto'},
    { id: 14, name: 'Celeritas'},
    { id: 15, name: 'Magneta'},
    { id: 16, name: 'RubberMan'},
    { id: 17, name: 'Dynama'},
    { id: 18, name: 'Dr IQ'},
    { id: 19, name: 'Magma'},
    { id: 20, name: 'Tornado'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
