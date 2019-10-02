import { Component, OnInit, Output, AfterViewInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {

  
  avaliableColumn:any = [];
  visibleColumn:any = [];
  dataList : any = [];
  
  @Input() dataTableSetting:any ={};

  constructor() { }

  ngOnInit() {
   
  }

  ngOnChanges() {
    if(Object.keys(this.dataTableSetting).length){
          this.avaliableColumn = this.dataTableSetting.avaliableColumn;
          this.visibleColumn = this.dataTableSetting.visibleColumn;
          this.dataList = this.dataTableSetting.dataList;
    }
  }

  getVisibleColumnData(event:any){
    this.visibleColumn=Object.assign([],event);
  }
   
 
 

}
