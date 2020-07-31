import { OperationService } from './../operation.service';
import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.css']
})
export class NoteContainerComponent implements OnInit {

  constructor(public global:GlobalService,public operation:OperationService) { }

  ngOnInit(): void {
  }

}
