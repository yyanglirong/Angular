import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-detailmusic',
  templateUrl: './detailmusic.component.html',
  styleUrls: ['./detailmusic.component.css']
})
export class DetailmusicComponent implements OnInit {
  public id:string;
  public list:any
  constructor(public route:ActivatedRoute,public http:HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe(res=>{
      this.id=res.id
    })
    var url:string =`http://192.168.14.15:5000/playlist/detail?id=${this.id}`
    this.http.get(url).subscribe(res=>{
      var lists = res["playlist"]
      this.list = lists["tracks"]
      console.log(res)
    })
  }

}
