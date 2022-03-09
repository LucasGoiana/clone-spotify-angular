import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'spotify-front';
  constructor(private http : HttpClient){}
  response: any = [];
  buscarAlbum(nomeAlbum: any){
    var album = {'name': nomeAlbum.target.value};

    this.http.post("http://localhost:9999/api/v1/", album)
           .subscribe(resultado => this.response = [resultado]);
           //.subscribe(resultado => console.log(resultado.hasOwnProperty));
    //new AlbunsService(this.http).getAlbum();

    //alert(nomeAlbum.target.value);
  }
  

}
