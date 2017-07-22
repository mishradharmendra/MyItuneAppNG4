import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;

    constructor(private _http:Http){

    }

    /*searchMusic(str:string, type='artist'){
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl)
            .map(res => res.json());
    }*/
    searchMusic(str:string, type='musicArtist') {
      this.searchUrl = 'https://itunes.apple.com/search?term='+str+'&limit=20&entity='+type+'&country=us';

      return this._http.get(this.searchUrl)
          .map(res => res.json());
    }

    getArtist(id:string){
        this.artistUrl = 'https://itunes.apple.com/lookup?id='+id;
        return this._http.get(this.artistUrl)
            .map(res => res.json());
    }

    getAlbums(artistId:string){
        this.albumsUrl = 'https://itunes.apple.com/lookup?id='+artistId+'&entity=album';
        return this._http.get(this.albumsUrl)
            .map(res => res.json());
    }

    getAlbum(id:string){
        this.albumUrl = 'https://itunes.apple.com/us/album/id'+id+'?isWebExpV2=true&dataOnly=true';
        return this._http.get(this.albumUrl)
            .map(res => res.json());
    }
}
