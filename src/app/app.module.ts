import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistListComponent } from './artists/artist-list/artist-list.component';
import { PlaylistListComponent } from './playlists/playlist-list/playlist-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    PlaylistListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
