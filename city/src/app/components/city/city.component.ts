import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service'
import {Router} from "@angular/router"
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  public list:any []=["上海","北京","武汉","杭州"]
  constructor(public common:CommonService,private router:Router) { }

  ngOnInit() {
  }
  handlecilck(city:string){
    console.log(city)
    this.common.changeCity(city)
    this.router.navigate(['/home'])
  }
}
