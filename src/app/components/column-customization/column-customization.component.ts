import { Component, OnInit, EventEmitter, OnChanges, Input, AfterViewInit, ChangeDetectorRef, AfterContentChecked, Output } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-column-customization',
  templateUrl: './column-customization.component.html',
  styleUrls: ['./column-customization.component.scss']
})
export class ColumnCustomizationComponent implements OnInit, OnChanges {
  

  @Input() avaliableColumnData :any = [];
  @Input() visibleColumnData :any = [];
  @Output() getVisibleColumnData = new EventEmitter<any>();

   avaliableColumn = [];
   visibleColumn = [];
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
   
  }

  ngOnChanges() {
    this.avaliableColumn=this.avaliableColumnData;
    this.visibleColumn = this.visibleColumnData;
  }


  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

    this.getVisibleColumnData.emit(this.visibleColumn);
  }
 
}
