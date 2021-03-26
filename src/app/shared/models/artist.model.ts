import { Song } from "./song.model";

export class Artist {
    id: number;
    name: string;
    songs: Song[];

    constructor() {
        this.id = 0;
        this.name = '';
        this.songs = [];
    }
}