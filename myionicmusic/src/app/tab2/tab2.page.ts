import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public sub:any
  constructor(public http:HttpClient) {}
  ngOnInit(){
    var url:string = "https://douban-api.uieee.com/v2/movie/top250"
    this.http.get(url).subscribe(res=>{
      this.sub=res["subjects"]
    })
  }

}
