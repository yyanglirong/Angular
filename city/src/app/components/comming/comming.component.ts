import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-comming',
  templateUrl: './comming.component.html',
  styleUrls: ['./comming.component.css']
})
export class CommingComponent implements OnInit {
  public sub:any
  constructor(public http:HttpClient) { }

  ngOnInit() {
    var url:string = "https://douban.uieee.com/v2/movie/coming_soon";
    this.http.get(url).subscribe(res=>{
      this.sub = res["subjects"];
      console.log(this.sub)
    })
  }

}
