import { OperationService } from './../operation.service';
import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidenotesbar',
  templateUrl: './sidenotesbar.component.html',
  styleUrls: ['./sidenotesbar.component.css'],
})
export class SideNotesBarComponent implements OnInit {
  public searchValue = '';
  public tempNotes = [];

  constructor(
    public global: GlobalService,
    public operation: OperationService
  ) {}

  ngOnInit(): void {
    this.tempNotes.push(...this.global.notes);
  }

  search = () => {
    let newArr = [];
    if (this.searchValue.length > 0) {
      for (let index = 0; index < this.global.notes.length; index++) {
        if (
          this.global.notes[index].title
            .toLowerCase()
            .indexOf(this.searchValue.toLowerCase()) > -1
        )
          newArr.push(this.global.notes[index]);
      }
      this.global.notes = [];
      this.global.notes.push(...newArr);
      console.log(this.global.notes);
    } else {
      this.global.notes = [];
      this.global.notes.push(...this.tempNotes);
    }
  };
}
