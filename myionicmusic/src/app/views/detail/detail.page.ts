import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public tracks:any
  public id:any
  constructor(public http:HttpClient,public route:ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.id = res["id"]
      console.log(this.id)
    })
    var url:string =`http://192.168.14.15:5000/playlist/detail?id=${this.id}`
    this.http.get(url).subscribe(res=>{
      var lsit= res["playlist"];
      this.tracks= lsit["tracks"]
    })
  }

}
