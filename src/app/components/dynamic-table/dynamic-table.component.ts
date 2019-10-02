import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragStart, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTableDataSource } from '@angular/material/table';






@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit,OnChanges {

  columns: any[] = [];
  title = 'Material Table column drag and drop';
  displayedColumns: string[] = [];
  dataSource =  new MatTableDataSource<Element>();
  @Input() visibleColumnData :any = [];
  @Output() getVisibleColumnData = new EventEmitter<any>();
  @Input() dataList:any = [];

  previousIndex: number;

  constructor() { }

  ngOnInit() {
    this.setDisplayedColumns();
    this.dataSource = new MatTableDataSource<Element>(this.dataList);
  }

  ngOnChanges(){
      this.columns =  this.coustimzeColumn(this.visibleColumnData);
      this.setDisplayedColumns();
  }
  
  coustimzeColumn(list: any): any {
    let visibleColumn:any = [];
    for (let i = 0; i < list.length; i++) {
      visibleColumn.push({ 'field': list[i] });
    }
    return visibleColumn;
  }


 

  setDisplayedColumns() {
    this.displayedColumns = [];
    this.columns.forEach(( colunm, index) => {
      colunm.index = index;
      this.displayedColumns[index] = colunm.field;
    });
  }

  dragStarted(event: CdkDragStart, index: number ) {
    this.previousIndex = index;
  }

  dropListDropped(event: CdkDropList, index: number) {
    if (event) {
      moveItemInArray(this.columns, this.previousIndex, index);
      this.setDisplayedColumns();
      this.getVisibleColumnData.emit(this.displayedColumns);
    }
  }
  

}
