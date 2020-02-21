import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  public list:any
  constructor(public http:HttpClient) { }

  ngOnInit() {
    var url:string = "http://192.168.14.15:5000/top/playlist?cat=华语";
    this.http.get(url).subscribe(res=>{
      this.list = res["playlists"];
    })
  }

}
