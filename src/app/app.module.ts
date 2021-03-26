import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistListComponent } from './artists/artist-list/artist-list.component';
import { ArtistDetailComponent } from './artists/artist-detail/artist-detail.component';
import { PlaylistListComponent } from './playlists/playlist-list/playlist-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    ArtistDetailComponent,
    PlaylistListComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
