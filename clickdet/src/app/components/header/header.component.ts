import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public list:any;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    var url:string = "http://192.168.14.15:5000/top/playlist?cat=华语";
    this.http.get(url).subscribe(res=>{
      this.list = res["playlists"];
    })
  }
  handledel(id){
    var sub = this.list.filter(item=>item.id!==id)
    this.list = sub
  }
}
