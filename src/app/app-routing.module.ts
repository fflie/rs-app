import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistListComponent } from './artists/artist-list/artist-list.component';
import { ArtistDetailComponent } from './artists/artist-detail/artist-detail.component';
import { PlaylistListComponent } from './playlists/playlist-list/playlist-list.component';

const routes: Routes = [
  { path: 'artist-list', component: ArtistListComponent },
  { path: 'playlist-list', component: PlaylistListComponent },
  { path: 'artist/:id', component: ArtistDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
