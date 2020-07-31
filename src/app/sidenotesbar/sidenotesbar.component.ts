import { OperationService } from './../operation.service';
import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenotesbar',
  templateUrl: './sidenotesbar.component.html',
  styleUrls: ['./sidenotesbar.component.css']
})
export class SideNotesBarComponent implements OnInit {

 
  constructor(public global:GlobalService,public operation:OperationService) {}

  ngOnInit(): void {
  }

}
