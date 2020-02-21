import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-detailmovie',
  templateUrl: './detailmovie.page.html',
  styleUrls: ['./detailmovie.page.scss'],
})
export class DetailmoviePage implements OnInit {
  public id:string
  public list:any
  public img:any
  public title:string
  public sum:string
  constructor(public http:HttpClient,public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.id = res["id"]
    })
    var url:string =`https://douban-api.uieee.com/v2/movie/subject/${this.id}`
    this.http.get(url).subscribe(res=>{
      this.list = res
      var imgs = res["images"];
      this.img =imgs["small"];
      this.title = res["title"];
      this.sum = res["summary"];
    })
  }

}
