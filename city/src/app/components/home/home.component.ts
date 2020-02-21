import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service'
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public city:string;
  public img:any
  public sub:any
  constructor(public common:CommonService,public http:HttpClient) { }

  ngOnInit() {
    this.city = this.common.getCity();
    var url:string = "https://douban.uieee.com/v2/movie/coming_soon";
    this.http.get(url).subscribe(res=>{
      this.sub = res["subjects"];
      console.log(this.sub)
      this.img =this.sub.slice(0,3);
      console.log(this.img)
    })
  }
  
}
