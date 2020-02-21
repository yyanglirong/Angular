import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-mv',
  templateUrl: './mv.component.html',
  styleUrls: ['./mv.component.css']
})
export class MvComponent implements OnInit {
  public sub:any
  constructor(public http:HttpClient) { }

  ngOnInit() {
    var url:string = "https://douban-api.uieee.com/v2/movie/top250";
    this.http.get(url).subscribe(res=>{
      this.sub = res["subjects"]
    })
  }

}
