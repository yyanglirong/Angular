import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() data:any
  constructor() { }

  ngOnInit() {
  }
}
