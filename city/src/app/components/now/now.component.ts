import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.css']
})
export class NowComponent implements OnInit {
  public sub:any
  constructor(public http:HttpClient) { }

  ngOnInit() {
    var url:string = "https://douban.uieee.com/v2/movie/in_theaters";
    this.http.get(url).subscribe(res=>{
      this.sub = res["subjects"];
      console.log(this.sub)
    })
  }

}
