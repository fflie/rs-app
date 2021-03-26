import { Injectable } from '@angular/core';
import { Song } from '../models/song.model';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class SongService {
  private songsUrl = 'http://localhost:3000/songs';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET songs from the server */
  getSongs (): Observable<Song[]> {
    return this.http.get<Song[]>(this.songsUrl)
      .pipe(
        tap(_ => this.log('fetched songs')),
        catchError(this.handleError('getSongs', []))
      );
  }

  /** GET songs by artist name */
  getSongsForArtist (name: string): Observable<Song[]> {
    const url = `${this.songsUrl}?artist=${name}`;
    return this.http.get<Song[]>(url)
      .pipe(
        tap(_ => this.log(`fetched artist name=${name}`)),
        catchError(this.handleError(`getSongsForArtist name=${name}`, []))
      );
  }

  /** GET song by id. Will 404 if id not found */
  getSong(id: number): Observable<Song> {
    const url = `${this.songsUrl}/${id}`;
    return this.http.get<Song>(url).pipe(
      tap(_ => this.log(`fetched song id=${id}`)),
      catchError(this.handleError<Song>(`getSong id=${id}`))
    );
  }

  /** Log a SongService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`SongService: ${message}`);
  }
  

  /**
   * Handle Http operation that failed.
   * Let the app continue.ist
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

