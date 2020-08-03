import { Notes } from './model/notes.model';
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
    let index = this.global.notes.findIndex((note) => {
      return note.id === item.id;
    });

    const arr = this.global.notes.filter((item) => item === item);
    arr.splice(index, 1);
    this.global.notes = arr;
  };

  add = () => {
    var obj = {
      id: Number(this.global.addNotes.id),
      title: this.global.addNotes.title,
      content: this.global.addNotes.content,
    };
    if (obj.title === undefined || obj.title === null || obj.title === '') {
      return;
    } else if (
      obj.content === undefined ||
      obj.content === null ||
      obj.content === ''
    ) {
      return;
    }
    this.global.notes.push(obj);
    this.global.addNotes = {
      id: '',
      title: '',
      content: '',
    };
    console.log(this.global.notes);
    document.getElementById('close').click();
  };
}
