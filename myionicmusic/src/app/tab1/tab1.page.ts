import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public list:any
  constructor(public http:HttpClient) {}
  ngOnInit(){
    var url:string = "http://192.168.14.15:5000/top/playlist?cat=华语";
    this.http.get(url).subscribe(res=>{
      this.list = res["playlists"]
    })
  }
}
