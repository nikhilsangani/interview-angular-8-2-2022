import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  public ValueList: any = [];
  constructor() { }

  ngOnInit(): void {

    if(localStorage.getItem('dataSource')){
      this.ValueList = localStorage.getItem('dataSource');
      this.ValueList = JSON.parse(this.ValueList);
    }   
  }

}
