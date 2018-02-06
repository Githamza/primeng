import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { visitAll } from '@angular/compiler';
//import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {
  private visibleSidebar1 = false;
  constructor() { }
  @Input() visibleSidebarbtn;
  @Output() visibleSidebaroff = new EventEmitter<boolean>();
  ngOnInit() {
  }
  ngOnChanges() {
    console.log(this.visibleSidebar1)

    this.visibleSidebar1 = this.visibleSidebarbtn;

  }
  changestatut() {
    this.visibleSidebar1 = false;
    this.visibleSidebaroff.emit(this.visibleSidebar1);

  }


}
