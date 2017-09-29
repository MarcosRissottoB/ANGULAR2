import  { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

    artistas:any [] = [];

    urlBusqueda:string = 'https://api.spotify.com/v1/search';

    urlArtista:string = 'https://api.spotify.com/v1/artists';

    constructor( private http:Http ){}


    getArtistas( termino:string  ){

      let headers = new Headers();
     headers.append('authorization', 'Bearer BQCml8QO2GI75LeEs-HEF9gGOgwrAgvU6RJgrWZSSkcaz2KpYLRvr9cALwrGQnu4WTywmipEXTl6p9bFlwTLuA' );

      let query = '?q=' + termino + '+&type=artist';
      let url = this.urlBusqueda + query;

      return this.http.get( url, { headers })
                 .map( res => {
                  //  console.log(res);
                    // console.log("respuesta... ", res.json().artists.items);
                  this.artistas = res.json().artists.items;
                  // console.log(this.artistas);
                 })

    }

    getArtista( id:string  ){

      let headers = new Headers();
     headers.append('authorization', 'Bearer BQB5OFc6FMD_Xc9RLHyhzP0qWP_g_bF7LsSxpHgjWE56FvCCqLbbMATp-uUrb_T7OI4xx6IXmtw3oyC3BXO6cw' );

      let query =  `/${ id }`;
      let url = this.urlArtista + query;

      return this.http.get( url, { headers })
                 .map( res => {
                   console.log(res.json() );
                   return res.json();
                  // this.artistas = res.json().artists.items;

                 })

    }


    getTop( id:string  ){

      let headers = new Headers();
     headers.append('authorization', 'Bearer BQAlhGUQWieZtUwP0AjCWIiNiMgaDv4FlsOp15BlSgFbwd-RFp6lrkS6n9T4jto6nmwW4CyMlgDNLezaWyXf2A' );

      let query =  `/${ id }/top-tracks?country=ES`;
      let url = this.urlArtista + query;

      return this.http.get( url, { headers })
                 .map( res => {
                   console.log(res.json().tracks );
                   return res.json().tracks;
                  // this.artistas = res.json().artists.items;

                 })

    }








}
