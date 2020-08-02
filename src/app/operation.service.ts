import { GlobalService } from './global.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  constructor(public global: GlobalService) {}

  selectNote = (note) => {
    this.global.selectedNote = note.content;
    this.global.noteId = note.id;
  };

  update = () => {
    let index = this.global.notes.findIndex((note) => {
      return note.id === this.global.noteId;
    });

    this.global.notes[index].content = this.global.selectedNote;
  };

  delete = (item) => {
    const arr = this.global.notes.filter((item) => item === item);
    arr.splice(0, 1);
    this.global.notes = arr;
  };

  add = (obj) => {
    this.global.notes.push(obj);
  };
}
