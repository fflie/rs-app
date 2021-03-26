import { Injectable } from '@angular/core';
import { Artist } from '../models/artist.model';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ArtistService {
  private artistsUrl = 'http://localhost:3000/artists';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET artists from the server */
  getArtists (): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistsUrl)
      .pipe(
        tap(_ => this.log('fetched artists')),
        catchError(this.handleError('getArtists', []))
      );
  }

  /** GET artist by id. Will 404 if id not found */
  getArtist(id: number): Observable<Artist> {
    const url = `${this.artistsUrl}/${id}`;
    return this.http.get<Artist>(url).pipe(
      tap(_ => this.log(`fetched artist id=${id}`)),
      catchError(this.handleError<Artist>(`getArtist id=${id}`))
    );
  }

  /** Log a ArtistService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ArtistService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
