import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public list:any
  public checked:boolean = true
  constructor(public http:HttpClient) { }

  ngOnInit() {
    var url:string = "http://yapi.demo.qunar.com/mock/36046/cart"
    this.http.get(url).subscribe(res=>{
      this.list =res
      console.log(this.list)
    })
  }
  handleChange(){
    this.list.forEach(item=>item.isSelected=this.checked)
  }
  onChange(){
    this.checked=this.list.every(item=>item.isSelected)
  }
  sub(a,b){
    return (a*b).toFixed(2)
  }
  handleDelete(data){
    var list = this.list.filter(value=>value!==data);
    this.list =list
  }
  sum(){
    var total=0;
    for(let i=0;i<this.list.length;i++){
      if(this.list[i].isSelected){
        total=total+this.list[i].productCount*this.list[i].productPrice
      }else{
        continue;
      }
    }
    return total.toFixed(2)
  }
}
