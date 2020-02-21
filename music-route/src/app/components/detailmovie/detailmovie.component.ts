import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-detailmovie',
  templateUrl: './detailmovie.component.html',
  styleUrls: ['./detailmovie.component.css']
})
export class DetailmovieComponent implements OnInit {
  public id:string
  public playlist:any
  constructor(public route:ActivatedRoute,public http:HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.id = res.id
    })
    var url:string = `https://douban-api.uieee.com/v2/movie/subject/${this.id}`
    this.http.get(url).subscribe(res=>{
      this.playlist=res
      console.log(this.playlist)
    })
  }

}
