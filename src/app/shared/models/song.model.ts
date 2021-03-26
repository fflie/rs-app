export class Song {
    id: number;
    name: string;
    year: number;
    artist: string;
    shortname: string;
    bpm: number;
    duration: number;
    genre: string;
    spotifyId: string;
    album: string;

    constructor() {
        this.id = 0;
        this.name = '';
        this.year = 0;
        this.artist = '';
        this.shortname = '';
        this.bpm = 0;
        this.duration = 0;
        this.genre = '';
        this.spotifyId = '';
        this.album = '';
    }
}